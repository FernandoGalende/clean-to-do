/// <reference types="cypress" />

describe('Auth', () => {
  it('Should login and logout sucessfully', () => {
    cy.visit('/');
    cy.findByRole('textbox', { name: /email/i }).type(Cypress.env('CYPRESS_E2E_USERNAME'));
    cy.findByLabelText(/password/i).type(Cypress.env('CYPRESS_E2E_PASSWORD'));
    cy.findByRole('button', {
      name: /login/i
    }).click();
    cy.url().should('include', '/todos');
    cy.findByRole('button', {
      name: /logout/i
    }).click();
    cy.url().should('include', '/login');
  });
});
