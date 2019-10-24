/// <reference types="cypress" />


const texts = [
  'Publishing open data using IATI',
  'Publishing data on their humanitarian activities',
  'using v2.02 of the IATI standard or later',
  'providing more granular v2.02 data',
];

describe('Landing', () => {


  it('should load the page', () => {
    cy.visit('/signatoryProgress');
  });


/*  it('should show username and password input fields', function() {
    cy.findByTestId('main-nav-button-container').should('exist');
    cy.findByTestId('Home').should('exist');
    cy.findByTestId('About').should('exist');
    cy.findByTestId('Signatory Progress').should('exist');
    cy.findByTestId('Signatory Data').should('exist');
    cy.findByTestId("FAQ's").should('exist');
  });


*/

  it('should show the correct texts', function() {
    texts.map(text => cy.queryByText(text).should('exist'));
  });

});
