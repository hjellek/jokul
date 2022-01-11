import { unicode } from "@fremtind/jkl-constants-util";

import { formatNumber, FormatNumberOptions } from "../util/formatNumber";
import { parseNumber } from "../util/parseNumber";

type lengthUnit =
    | "kilometer"
    | "meter"
    | "decimeter"
    | "centimeter"
    | "millimeter"
    | "micrometer"
    | "nanometer"
    | "picometer"
    | "mile"
    | "yard"
    | "foot"
    | "inch"
    | "point";

interface FormatAvstandOptions extends FormatNumberOptions {
    /**
     * Til vanlig vises kortformen av den valgte enheten (f.eks. km for kilometer).
     * Hvis du ønsker et annet suffiks, f.eks. "km/år" kan du spesifisere det her.
     *
     * NB! Hvis du ikke ønsker suffix anbefaler vi at du bruker formatNumber
     * direkte fremfor å sende inn en tom string
     */
    suffix?: string;
    unit?: lengthUnit;
}

const defaultOptions: FormatNumberOptions = {
    style: "unit",
    unit: "kilometer",
};

export const formatAvstand = (input: string | number, options?: FormatAvstandOptions) => {
    const number = parseNumber(input);
    if (!number) {
        return input.toString();
    }

    const { suffix, ...formatOptions } = { ...defaultOptions, ...options };
    if (suffix !== undefined) {
        const actualSuffix = suffix.length ? `${unicode.nbsp}${suffix}` : suffix;
        return `${formatNumber(number, { ...formatOptions, style: "decimal", unit: undefined })}${actualSuffix}`;
    }

    return formatNumber(number, formatOptions);
};
