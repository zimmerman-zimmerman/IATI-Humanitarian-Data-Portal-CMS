/// <reference types="cypress" />

describe('Tooltips', () => {
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

  it('should go to tooltips text page ', () => {
    cy.visit('/tooltips');
  });

  /*  it('should show the correct texts', function() {
    text.map(text => cy.findAllByText(text).should('exist'));
  });*/
});
