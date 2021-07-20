/// <reference types="cypress" />

class mode_s_home_page {

    header() {
        return cy.get('[    class="header-lower tds-animate_small--to_reveal"\n]');
    }

    range() {
        return cy.get('#block-tesla-frontend-content .tcl-animate--revealed:nth-of-type(1) .tds-text--h2')
    }

    accelerationTime() {
        return cy.get('#block-tesla-frontend-content .tcl-animate--revealed:nth-of-type(2) .tds-text--h2');
    }

    topSpeed() {
        return cy.get('#block-tesla-frontend-content .tcl-animate--revealed:nth-of-type(3) .tds-text--h2');
    }

    peakPower() {
        return cy.get('.callout--hide-on-mobile .tds-text--h2');
    }

    purchasePriceTab() {
        return cy.get('[id="purchase_price-tab"]');
    }

    PotentialSavingsTab() {
        return cy.get('[id="potential_savings-tab"]');
    }

    longRangeOption() {
        return cy.get('[control-id="ControlID-6"]');
    }

    plaidOption() {
        return cy.get('[data-id=\'\\$MTS11\']');
    }

    paintPearlWhiteMultiCoat() {
        return cy.get('.group-container [role=\'none\']:nth-of-type(2) .child-group--option_details .observer-placeholder:nth-of-type(1)');
    }

    paintSolidBlack() {
        return cy.get('.group-container [role=\'none\']:nth-of-type(2) .child-group--option_details .observer-placeholder:nth-of-type(2)');
    }

    paintMidnightSilverMetallic() {
        return cy.get('.group-container [role=\'none\']:nth-of-type(2) .child-group--option_details .observer-placeholder:nth-of-type(3)');
    }

    paintDeepBlueMetallic() {
        return cy.get('.group-container [role=\'none\']:nth-of-type(2) .child-group--option_details .observer-placeholder:nth-of-type(4)');
    }

    paintRedMultiCoat() {
        return cy.get('.group-container [role=\'none\']:nth-of-type(2) .child-group--option_details .observer-placeholder:nth-of-type(5)');
    }

    Wheels19Inch() {
        return cy.get('.group-container [role=\'none\']:nth-of-type(3) .child-group--option_details .observer-placeholder:nth-of-type(1)');
    }

    Wheels21Inch() {
        return cy.get('.group-container [role=\'none\']:nth-of-type(3) .child-group--option_details .observer-placeholder:nth-of-type(2)');
    }


}

export default mode_s_home_page
