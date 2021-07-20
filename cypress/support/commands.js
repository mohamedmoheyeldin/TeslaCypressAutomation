// ***********************************************
/// <reference types="cypress" />
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import landing_page from "../pages/landing_page.spec";


const myLanding = new landing_page()


beforeEach(() => {
    cy.visit('/')
    myLanding.logo().should('be.visible')
    myLanding.centerMenu().should('be.visible')
})

Cypress.Commands.add('verifyHomePageSections', (headLineText, leftButtonText, rightButtonText) => {
    myLanding.headLineText().should('be.visible').and('have.text', headLineText)
    myLanding.leftButton().should('be.visible').and('contain.text', leftButtonText)
    myLanding.rightButton().should('be.visible').and('contain.text', rightButtonText).scrollIntoView()
    cy.wait(800)

})




