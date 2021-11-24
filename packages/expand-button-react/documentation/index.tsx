import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { ExpandButtonExample } from "./ExpandButtonExample";
import "@fremtind/jkl-expand-button/expand-button.css";
import "@fremtind/jkl-icons/animated-icons.css";

renderExample(
    <DevExample
        component={ExpandButtonExample}
        knobs={{
            boolProps: ["Kompakt"],
        }}
    />,
    document.getElementById("app"),
);
