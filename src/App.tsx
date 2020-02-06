import * as React from 'react';
import { ButtomNavigation } from './components/bottomNavigation/BottomNavigation';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Projects } from './pages/projects/Projects';
import { Person } from './pages/person/Person';
import { Links } from './pages/links/Links';

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/person">
                <Person />
            </Route>
            <Route path="/links">
                <Links />
            </Route>
            <Route exact path="/">
                <Redirect to="/person" />
            </Route>
        </Switch>
        <footer>
            <ButtomNavigation />
        </footer>
    </BrowserRouter>
);
