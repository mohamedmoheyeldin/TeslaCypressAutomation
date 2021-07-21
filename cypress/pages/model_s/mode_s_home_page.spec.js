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

    headerSection_2() {
        return cy.get('div#block-tesla-frontend-content > div:nth-of-type(1)');
    }

    headerSection_3() {
        return cy.get('[id="tesla-carousel-3924--carousel"]');
    }

    headerSection_4() {
        return cy.get('.tcl-media-with-text--checkerboard .tcl-media-with-text--checkerboard__row--media-left:nth-of-type(1)');
    }

    headerSection_5() {
        return cy.get('.tcl-media-with-text--checkerboard__row--media-right:nth-of-type(4) .tcl-media-with-text__cell--position-left');
    }

    headerSection_6() {
        return cy.get('section:nth-of-type(2)  .hero.hero--with-banner.hero--with-callouts.tcl-objectfit-position-- .tds-flex--col_1of3.tds-flex-item');
    }

    headerSection_7() {
        return cy.get('.performance__asset');
    }

    headerSection_8() {
        return cy.get('[class="mktg-carousel-items mktg-js-carousel-items"]');
    }

    headerSection_9() {
        return cy.get('#block-tesla-frontend-content [data-gtm-event] .banner-subheader.tcl-animate--revealed');
    }

    headerSection_10() {
        return cy.get('#block-tesla-frontend-content .tds-colorscheme--dark:nth-child(9) .tcl-media-with-text__cell--type-text.tcl-media-with-text__cell--position-right');
    }

    headerSection_11() {
        return cy.get('.banner--right .tds-flex');
    }

    headerSection_12() {
        return cy.get('[id="tesla-range-carousel-2-410--carousel"]');
    }

    headerSection_13() {
        return cy.get('.banner--left .tds-flex');
    }

    headerSection_14() {
        return cy.get('[class="tds-text--h2 tcl-specifications__title tcl-animate--to-reveal tcl-animate--revealed"]');
    }

    headerSection_15() {
        return cy.get('[class="tds-flex-item order--content"]');
    }

    footer() {
        return cy.get('[class="tds-footer-nav"]');
    }

    oderNowButton() {
        return cy.get('.tcl-button-group.tcl-button-group--2-buttons.tcl-button-group--type-horizontal.tds-btn_group > a[title=\'Order Now\']');
    }


}

export default mode_s_home_page
