import React, { useState } from "react";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";
import { ExpandButton } from "../src";

export const ExpandButtonExample = ({ boolValues }: ExampleComponentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const compact = boolValues?.["Kompakt"];
    return (
        <ExpandButton
            compact={compact}
            texts={{ open: "Åpne", close: "Lukk" }}
            onClick={() => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
        />
    );
};

export default ExpandButtonExample;

export const expandButtonExampleCode: CodeExample = () => `
    <ExpandButton
        compact={compact}
        texts={{ open: "Åpne", close: "Lukk" }}
        onClick={() => setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
    />
`;
