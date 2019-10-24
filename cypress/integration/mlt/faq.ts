/// <reference types="cypress" />

describe('FAQ', () => {
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

  it('should go to faq page ', () => {
    cy.visit('/faq');
  });

  /*  it('should show the correct texts', function() {
    text.map(text => cy.findAllByText(text).should('exist'));
  });*/
});
