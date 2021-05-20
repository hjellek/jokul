/// <reference types="cypress" />

context("Cookie Consent", () => {
    beforeEach(() => {
        cy.testComponent("cookieconsent");
        cy.clearCookies();
    });

    it("Cookie Consent mdoal works as expected", () => {
        cy.getComponent().toMatchImageSnapshot();
        cy.getByTestid("trigger-cookie-consent").first().click();
        cy.getByTestid("jkl-cookie-consent-godta").should("be.visible");
        cy.getByTestid("jkl-cookie-consent-godta").first().click();
        cy.getCookie("fremtind-cookie-consent").should("exist");
        cy.getByTestid("jkl-cookie-consent-godta").should("not.be.visible");
    });
});
