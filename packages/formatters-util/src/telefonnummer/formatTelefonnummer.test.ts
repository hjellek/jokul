import { formatTelefonnummer } from "./formatTelefonnummer";

describe("formatTelefonnummer", () => {
    it("formats mobile numbers correctly", () => {
        expect(formatTelefonnummer("98651731")).toEqual("986 51 731");
        expect(formatTelefonnummer("48435298")).toEqual("484 35 298");
    });

    it("formats 800-numbers correctly", () => {
        expect(formatTelefonnummer("81549300")).toEqual("815 49 300");
    });

    it("formats landline numbers correctly", () => {
        expect(formatTelefonnummer("22438634")).toEqual("22 43 86 34");
    });

    it("ignores spaces in otherwise valid inputs", () => {
        expect(formatTelefonnummer("22 4386 3 4")).toEqual("22 43 86 34");
    });

    it("does not format inputs with under 8 digits", () => {
        expect(formatTelefonnummer("2243863")).toEqual("2243863");
        expect(formatTelefonnummer("2 243 863")).toEqual("2 243 863");
    });

    it("does not format inputs with over 8 digits", () => {
        expect(formatTelefonnummer("224386345")).toEqual("224386345");
        expect(formatTelefonnummer("2 243 863 45")).toEqual("2 243 863 45");
    });

    it("does not format inputs with non-digit characters", () => {
        expect(formatTelefonnummer("224386dsf5")).toEqual("224386dsf5");
        expect(formatTelefonnummer("2 243 sdf 45")).toEqual("2 243 sdf 45");
    });
});

describe("formatTelefonnumer with partial option", () => {
    it("formats mobile numbers correctly", () => {
        expect(formatTelefonnummer("9865", { partial: true })).toEqual("986 5");
        expect(formatTelefonnummer("986517", { partial: true })).toEqual("986 51 7");
        expect(formatTelefonnummer("98651731", { partial: true })).toEqual("986 51 731");
        expect(formatTelefonnummer("4843", { partial: true })).toEqual("484 3");
        expect(formatTelefonnummer("484352", { partial: true })).toEqual("484 35 2");
        expect(formatTelefonnummer("48435298", { partial: true })).toEqual("484 35 298");
    });

    it("formats 800-numbers correctly", () => {
        expect(formatTelefonnummer("8154", { partial: true })).toEqual("815 4");
        expect(formatTelefonnummer("815493", { partial: true })).toEqual("815 49 3");
        expect(formatTelefonnummer("81549300", { partial: true })).toEqual("815 49 300");
    });

    it("formats landline numbers correctly", () => {
        expect(formatTelefonnummer("224", { partial: true })).toEqual("22 4");
        expect(formatTelefonnummer("22438", { partial: true })).toEqual("22 43 8");
        expect(formatTelefonnummer("2243863", { partial: true })).toEqual("22 43 86 3");
        expect(formatTelefonnummer("22438634", { partial: true })).toEqual("22 43 86 34");
    });
});
