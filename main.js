"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var stdio_1 = require("./lib/stdio");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var a, b, c, D;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stdio_1["default"].writeln('ax^2 + bx + c = 0');
                    return [4 /*yield*/, stdio_1["default"].readln({
                            message: 'a = ',
                            type: 'int',
                            "default": 1
                        })];
                case 1:
                    a = _a.sent();
                    return [4 /*yield*/, stdio_1["default"].readln({
                            message: 'b = ',
                            type: 'int',
                            "default": -4
                        })];
                case 2:
                    b = _a.sent();
                    return [4 /*yield*/, stdio_1["default"].readln({
                            message: 'c = ',
                            type: 'int',
                            "default": 4
                        })];
                case 3:
                    c = _a.sent();
                    writeMember(a, true);
                    stdio_1["default"].write('x^2 ');
                    writeMember(b);
                    stdio_1["default"].write('x ');
                    writeMember(c);
                    stdio_1["default"].writeln(' = 0');
                    D = Math.pow(b, 2) - 4 * a * c;
                    stdio_1["default"].writeln('D = ' + D);
                    if (D < 0) {
                        stdio_1["default"].writeln('Решений нет');
                        return [2 /*return*/];
                    }
                    stdio_1["default"].writeln('x1 = ' + (-b + D) / (2 * a));
                    if (D > 0) {
                        stdio_1["default"].writeln('x2 = ' + (-b - D) / (2 * a));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
function writeMember(number, isWithoutPlus) {
    if (isWithoutPlus === void 0) { isWithoutPlus = false; }
    var mod = Math.abs(number);
    if (number >= 0 && !isWithoutPlus) {
        stdio_1["default"].write('+ ');
    }
    if (number < 0) {
        stdio_1["default"].write('- ');
    }
    if (mod !== 1) {
        stdio_1["default"].write(mod);
    }
}
