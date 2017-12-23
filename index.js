"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var main_js_1 = require("./main.js");
console.clear();
process.env.NODE_ENV = process.argv.includes('-dev')
    ? 'development'
    : 'production';
var END_LINE = '\nНажмите ' +
    chalk_1["default"].underline('Enter') +
    ' или ' +
    chalk_1["default"].underline('Ctrl + C') +
    ', чтобы завершить программу';
main_js_1.main().then(function () { return console.log(END_LINE); });
