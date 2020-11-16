describe('Main', () => {
    it('should navigate to the page person', () => {
        cy.visit('http://localhost:5000/');
        cy.url().should('include', '/person');
    });
    it('should navigate to the page projects', () => {
        cy.visit('http://localhost:5000/');
        cy.contains('Projects').click();
        cy.url().should('include', '/projects');
    });
    it('should navigate to the page connect', () => {
        cy.visit('http://localhost:5000/');
        cy.contains('Connect').click();
        cy.url().should('include', '/connect');
        cy.contains('GitHub');
    });
    it('should open GitHub in a new tab', () => {
        cy.visit('http://localhost:5000/connect');
        cy.get('a[href="https://github.com/reichhartds"]').should('have.attr', 'target', '_blank');
    });
});
