/// <reference types="cypress" />


const texts = [
  'Hello',
  'Email',
  'Password',
];

describe('Landing', () => {


  it('should load the page', () => {
    cy.visit('/');
  });


 it('should show username and password input fields', function() {
    cy.findByTestId('login-email').should('exist');
    cy.findByTestId('login-password').should('exist');
    cy.findByTestId('login-button').should('exist');
  });

  it('should show the correct texts', function() {
    texts.map(text => cy.queryByText(text).should('exist'));
  });


});
