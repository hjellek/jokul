import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { FormattersUtilExample } from "./FormattersUtilExample";
import "@fremtind/jkl-formatters-util/formatters-util.css";

renderExample(<DevExample component={FormattersUtilExample} knobs={{}} />, document.getElementById("app"));
