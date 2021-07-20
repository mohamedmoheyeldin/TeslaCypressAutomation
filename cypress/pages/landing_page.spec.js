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


}

export default landing_page
