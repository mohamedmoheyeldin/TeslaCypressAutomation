/// <reference types="cypress" />

class mode_s_build_page {
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

export default mode_s_build_page
