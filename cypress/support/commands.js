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
import mode_s_home_page from "../pages/model_s/mode_s_home_page.spec";

const myLanding = new landing_page()
const myMode_s = new mode_s_home_page()
const model_S = require('../fixtures/model_s.json')


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

Cypress.Commands.add('navigateToModel_S_Page', () => {
    myLanding.headLineText().should('be.visible').and('have.text', 'Model S')
    myLanding.leftButton().should('be.visible').and('contain.text', 'Custom Order')
    myLanding.rightButton().should('be.visible').and('contain.text', 'Existing Inventory')
    myLanding.centerMenuModel_S_Link().click()
    myMode_s.header().should('be.visible').and('have.text', 'Model S')
    myMode_s.range().should('be.visible').and('have.text', model_S.specification.range)
    myMode_s.accelerationTime().should('be.visible').and('have.text', model_S.specification.accelerationTime)
    myMode_s.topSpeed().should('be.visible').and('have.text', model_S.specification.topSpeed)
    myMode_s.peakPower().should('be.visible').and('have.text', model_S.specification.peakPower)
})








