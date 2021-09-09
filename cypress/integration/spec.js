/// <reference types="cypress" />
it("as expected, *does* log AND shows # calls", () => {
  cy.intercept('https://example.cypress.io', cy.stub().log(true).as('foo'));

  cy.visit('https://example.cypress.io');

  cy.get('@foo').should('have.been.calledOnce');
});

it("as expected, does *not* log BUT doesn't shows # calls either", () => {
  cy.intercept('https://example.cypress.io', cy.stub().log(false).as('foo'));

  cy.visit('https://example.cypress.io');

  cy.get('@foo').should('have.been.calledOnce');
});
