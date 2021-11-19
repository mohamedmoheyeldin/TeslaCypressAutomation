/// <reference types="cypress" />

import Landing_page from "../../pages/landing_page.spec";


const myLanding = new Landing_page()

context('Verify Landing Page', () => {

    it('Verify all landing page section displays', () => {

        cy.verifyHomePageSections('Model S', 'Custom Order', 'Existing Inventory')
        cy.verifyHomePageSections('Model Y', 'Custom Order', 'Existing Inventory')
        cy.verifyHomePageSections('Model 3', 'Custom Order', 'Existing Inventory')
        cy.verifyHomePageSections('Model X', 'Custom Order', 'Existing Inventory')
        cy.verifyHomePageSections('Solar Panels', 'Order Now', 'Learn More')
        cy.verifyHomePageSections('Solar Roof', 'Order Now', 'Learn More')

        myLanding.headLineText().should('be.visible').and('have.text', 'Accessories')
        myLanding.shopNowButton().should('be.visible').and('contain.text', 'Shop Now')
        myLanding.footer().should('be.visible')

    })
})
