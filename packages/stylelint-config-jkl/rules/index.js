/* eslint-disable @typescript-eslint/no-var-requires */
const atRule = require("./at-rule");
const block = require("./block");
const color = require("./color");
const declaration = require("./declaration");
const property = require("./property");
const scss = require("./scss");
const selector = require("./selector");
const sheet = require("./sheet");
const time = require("./time");
const unit = require("./unit");
const value = require("./value");

module.exports = Object.assign(
    {},
    atRule,
    block,
    color,
    declaration,
    property,
    scss,
    selector,
    sheet,
    time,
    unit,
    value,
);
