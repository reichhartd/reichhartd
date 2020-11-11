const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const handler = require('serve-handler');
const http = require('http');

(async () => {
    // SERVE
    const server = http.createServer((request, response) => {
        // You pass two more arguments for config and middleware
        // More details here: https://github.com/vercel/serve-handler#options
        return handler(request, response, { public: 'build' });
    });

    server.listen(5000, () => {
        console.log('Running at http://localhost:5000');
    });

    // LIGHTHOUSE
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'info', output: 'html', port: chrome.port };
    const runnerResult = await lighthouse('http://localhost:5000/', options);

    // `.report` is the HTML report as a string
    const reportHtml = runnerResult.report;
    fs.writeFileSync('./build/lighthouse-report.html', reportHtml);

    // `.lhr` is the Lighthouse Result as a JS object
    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

    await chrome.kill();
    await server.close();
})();
