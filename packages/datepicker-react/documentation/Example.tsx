import React, { useState, VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { LabelVariant } from "@fremtind/jkl-core";
import { DatePicker } from "../src";

const monthsIsh = (num: number) => {
    const raw = 1000 * 60 * 60 * 24 * (num * 30 - 5);
    return raw < 0 ? 12 + raw : raw;
};

export const Example: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const [value, setValue] = useState<Date | undefined>(undefined);

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            extended={boolValues && boolValues["Utvidet velger"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            inverted={boolValues && boolValues["Invertert"]}
            variant={variant}
            errorLabel={errorLabel}
            helpLabel={helpLabel}
            disableBeforeDate={new Date(Date.now() - monthsIsh(14))}
            disableAfterDate={new Date(Date.now() + monthsIsh(14))}
            value={value}
            onFocus={(date) => {
                console.log("hello from onFocus", date);
                setValue(date);
            }}
            onBlur={(date) => {
                console.log("hello from onBlur", date);
                setValue(date);
            }}
            onChange={(date, _, meta) => {
                console.log("hello from onChange", date, _, meta);
                setValue(date);
            }}
            onKeyDown={(date, _) => {
                console.log("hello from onKeyDown", date, _);
                setValue(date);
            }}
        />
    );
};

export default Example;
