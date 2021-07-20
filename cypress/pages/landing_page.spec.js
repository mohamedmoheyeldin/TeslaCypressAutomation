/// <reference types="cypress" />

class landing_page {

    logo() {
        return cy.get('.tds-site-logo')
    }

    centerMenu() {
        return cy.get('.tds-align--center');
    }

    headLineText() {
        return cy.get('.reveal.tcl-hero-parallax__copy  .tcl-hero-parallax__heading.tds-colorscheme--light');
    }

    leftButton() {
        return cy.get('.tcl-hero-parallax__copy.reveal .tcl-hero-parallax__buttons-on-desktop .tds-btn--primary');
    }

    rightButton() {
        return cy.get('.tcl-hero-parallax__copy.reveal .tcl-hero-parallax__buttons-on-desktop .tds-btn--tertiary');
    }

    shopNowButton() {
        return cy.get('.tcl-hero-parallax__copy.reveal .tcl-hero-parallax__buttons-on-desktop .tds-btn--primary');
    }

    footer() {
        return cy.get('.tds-list--horizontal');
    }

    centerMenuModel_S_Link() {
        return cy.get('.tds-align--center li:nth-of-type(1)');

    }

    centerMenuModel_3_Link() {
        return cy.get('.tds-align--center li:nth-of-type(2)');
    }

    centerMenuModel_X_Link() {
        return cy.get('.tds-align--center li:nth-of-type(3)');
    }

    centerMenuModel_Y_Link() {
        return cy.get('.tds-align--center li:nth-of-type(4)');
    }

    centerMenuSolarRoofLink() {
        return cy.get('.tds-align--center li:nth-of-type(5)');
    }

    centerMenuSolarPanelsLink() {
        return cy.get('.tds-align--center li:nth-of-type(6)');
    }


}

export default landing_page
