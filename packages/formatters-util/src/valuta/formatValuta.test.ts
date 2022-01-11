import { unicode } from "@fremtind/jkl-constants-util";
import { formatValuta } from "./formatValuta";

const { NON_BREAKING_SPACE } = unicode;

describe("formatValuta", () => {
    it("uses suffix 'kr' by default", () => {
        expect(formatValuta(123)).toEqual(`123${NON_BREAKING_SPACE}kr`);
    });

    it("displays custom suffix correctly", () => {
        expect(formatValuta(123.5, { suffix: "kr/mnd" })).toEqual(`123,50${NON_BREAKING_SPACE}kr/mnd`);
    });

    it("displays custom prefix correctly", () => {
        expect(formatValuta(123.5, { prefix: "fra" })).toEqual(`fra${NON_BREAKING_SPACE}123,50${NON_BREAKING_SPACE}kr`);
    });

    it("always uses two digit fractions on non-integers", () => {
        expect(formatValuta(123.5)).toEqual(`123,50${NON_BREAKING_SPACE}kr`);
    });

    it("allows to ovveride number of fraction digits", () => {
        expect(formatValuta(123.5, { minimumFractionDigits: 3, maximumFractionDigits: 3 })).toEqual(
            `123,500${NON_BREAKING_SPACE}kr`,
        );
    });

    it("works on valid strings", () => {
        expect(formatValuta("123.5")).toEqual(`123,50${NON_BREAKING_SPACE}kr`);
    });

    it("passes through strings that cannot be parsed as numbers", () => {
        expect(formatValuta("hundreogtjuetre")).toEqual(`hundreogtjuetre`);
    });
});
