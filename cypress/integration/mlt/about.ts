/// <reference types="cypress" />
const textAbout = ['Title', 'Body', 'More link (optional)'];

describe('About', () => {


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

  it('should go to about page ', () => {
    cy.visit('/about');
    // cy.wait(5000);
  });

  /*it('should show the correct texts', function() {
    textAbout.map(text => cy.findAllByText(text).should('exist'));
  });*/
});
