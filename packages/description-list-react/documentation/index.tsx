import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";
import "@fremtind/jkl-icon-button/icon-button.min.css";

// Import actual example and component stylesheet (specific for this component):
import { DescriptionListExample } from "./DescriptionListExample";
import "@fremtind/jkl-description-list/description-list.min.css";

renderExample(<DevExample component={DescriptionListExample} />, document.getElementById("app"));
