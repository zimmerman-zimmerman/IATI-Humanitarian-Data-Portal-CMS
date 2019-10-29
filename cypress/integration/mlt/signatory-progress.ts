/// <reference types="cypress" />

const textSignatory = [
  'Add Signatory',
  'Name',
  'Organisation type',
  'GB signatory',
  'Registred Pub. ID',
];

describe('Signatory Progress', () => {
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

  it('should go to signatories page ', () => {
    cy.visit('/signatories');
  });

  /* it('should show the correct texts', function() {
    textSignatory.map(text => cy.findAllByText(text).should('exist'));
  });*/
});
