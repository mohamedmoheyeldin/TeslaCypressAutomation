/// <reference types="cypress" />

import Mode_s_home_page from "../../../../../pages/model_s/mode_s_home_page.spec";

const Landing_page = require("../../../../../pages/landing_page.spec");


const myLanding = new Landing_page()
const myMode_s = new Mode_s_home_page()



describe('Model S Long Range Cash Price', () => {

    it('Model S Long Range basic options Cash Price', () => {
        cy.navigateToModel_S_Page()



    })

    it('Model S Long Range basic with Full Self-Driving Capability Options Cash Price', () => {

    })

    it('Model S Long Range Max Options Cash Price', () => {

    })

    it('Model S Long Range Max with Full Self-Driving Capability Options Cash Price', () => {

    })

})
