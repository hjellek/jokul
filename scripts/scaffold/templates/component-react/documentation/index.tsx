import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import "@fremtind/jkl-scaffold/scaffold.css";

renderExample(<DevExample component={Example} knobs={{}} />, document.getElementById("app"));
