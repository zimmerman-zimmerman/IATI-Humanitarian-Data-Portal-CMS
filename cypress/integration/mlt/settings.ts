/// <reference types="cypress" />

describe('Settings', () => {
  const text = [''];

  it('should login ', () => {
    cy.visit('/login');
    cy.findByTestId('login-email')
      .should('exist')
      .type(Cypress.env('username'));
    cy.findByTestId('login-password')
      .should('exist')
      .type(Cypress.env('password'));
    cy.findByTestId('login-button')
      .should('exist')
      .click();
  });

  it('should go to settings page ', () => {
    cy.visit('/settings');
  });

  /*  it('should show the correct texts', function() {
    text.map(text => cy.findAllByText(text).should('exist'));
  });*/
});
