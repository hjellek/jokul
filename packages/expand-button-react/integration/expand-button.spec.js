/// <reference types="cypress" />

describe("ExpandButton", () => {
    beforeEach(() => {
        cy.testComponent("expand-button");
    });

    it("renders correctly", () => {
        cy.getComponent().toMatchImageSnapshot();
    });

    context("dark mode", () => {
        it("renders correctly", () => {
            cy.setDarkMode();
            cy.getComponent().toMatchImageSnapshot();
        });
    });
});
