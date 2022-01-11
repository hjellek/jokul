import React, { useState, ChangeEvent, VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { LabelVariant } from "@fremtind/jkl-core";
import { TextInput } from "../src";
import { Action } from "../src/TextInput";

// import { formatValuta } from "../../formatters-util/src/valuta/formatValuta";
// import { formatKortnummer } from "../../formatters-util/src/kortnummer/formatKortnummer";
// import { formatKontonummer } from "../../formatters-util/src/kontonummer/formatKontonummer";
// import { formatTelefonnummer } from "../../formatters-util/src/telefonnummer/formatTelefonnummer";
import { formatFodselsnummer } from "../../formatters-util/src/fodselsnummer/formatFodselsnummer";

const format = (value: string) => {
    // return formatValuta(value);
    // return formatKortnummer(value, { partial: true });
    // return formatKontonummer(value, { partial: true, separator: "." });
    // return formatTelefonnummer(value, { partial: true });
    return formatFodselsnummer(value, { partial: true });
};

export const TextInputExample: VFC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(format(e.target.value));
    };

    const helpLabel = boolValues?.["Med hjelpetekst"] ? "Fødselsnummer består av 11 siffer" : undefined;
    const errorLabel = boolValues?.["Med feil"] ? "Du må fylle ut fødselsnummer, 11 siffer." : undefined;

    const compact = boolValues?.["Kompakt"];
    const inline = boolValues?.["Inline"];
    const variant = choiceValues?.["Variant"] as LabelVariant;
    const action = boolValues?.["Med handling"]
        ? ({
              icon: "clear",
              label: "Nullstill feltet",
              onClick: () => setValue(""),
          } as Action)
        : undefined;
    const inverted = boolValues?.["Invertert"];

    if (inline) {
        return (
            <div>
                Jeg er <TextInput inline label="Alder" width="3rem" errorLabel={errorLabel} /> år gammel
            </div>
        );
    }

    return (
        <TextInput
            label="Fødselsnummer"
            name="fodselsnummer"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            value={value}
            onChange={handleChange}
            onKeyDown={() => console.log("onKeyDown event")}
            inline={inline}
            forceCompact={compact}
            variant={variant}
            action={action}
            inverted={inverted}
        />
    );
};

export const textInputExampleCode = ({ choiceValues, boolValues }: ExampleComponentProps): string => {
    const inline = boolValues?.["Inline"];
    if (inline) {
        return `
<div>
    Jeg er <TextInput inline label="Alder" width="3rem" errorLabel=${
        boolValues?.["Med feil"] ? `"Du må fylle ut alder"` : `{undefined}`
    } /> år gammel
</div>
`;
    }

    return `
<TextInput
    label="Fødselsnummer"
    name="fodselsnummer"
    helpLabel=${boolValues?.["Med hjelpetekst"] ? `"Fødselsnummer består av 11 siffer"` : `{undefined}`}
    errorLabel=${boolValues?.["Med feil"] ? `"Du må fylle ut fødselsnummer, 11 siffer."` : `{undefined}`}
    forceCompact={${boolValues?.["Kompakt"]}}
    variant={${choiceValues?.["Variant"]}}
    action={${
        boolValues?.["Med handling"]
            ? `{
        icon: "clear",
        label: "Nullstill feltet",
        onClick: () => setValue(""),
    }`
            : undefined
    }}
    {/* NB! inverted er deprecated */}
    inverted={${boolValues?.["Invertert"]}}
/>
`;
};
