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
/* eslint-disable no-console */
var readline_1 = require("readline");
var chalk_1 = require("chalk");
/**
* Интерфейс для ввода/вывода
* @name stdio
*/
exports["default"] = {
    /**
    * Метод для ввода
    * @param {Object} params
    * @prop {'int' | 'float' | 'string'} type
    * @prop {string} message
    * @prop {string | number} default
    */
    read: function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var defaultValue, message, type, rl;
            return __generator(this, function (_a) {
                defaultValue = params["default"];
                message = params.message || '';
                type = params.type;
                rl = readline_1.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                if (hasDefault(params)) {
                    rl.write(chalk_1["default"].blue(message));
                    rl.write(JSON.stringify(defaultValue));
                    rl.close();
                    return [2 /*return*/, returnTypedData(type, defaultValue)];
                }
                return [2 /*return*/, new Promise(function (resolve) { return rl.question(chalk_1["default"].blue(message), function (line) {
                        resolve(returnTypedData(type, line));
                        rl.close();
                    }); })];
            });
        });
    },
    /**
    * Метод для ввода с символом конца строки
    * @param {Object} params
    * @prop {'int' | 'float' | 'string'} type
    * @prop {string} message
    * @prop {string | number} default
    */
    readln: function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.read(params)];
                    case 1:
                        result = _a.sent();
                        if (hasDefault(params)) {
                            this.write('\n');
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    },
    /**
     * Метод для вывода
     * @param {string | number} message
     */
    write: function (message) {
        var rl = readline_1.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.write(chalk_1["default"].green('' + message));
        rl.close();
    },
    /**
    * Метод для вывода с символом конца строки
    * @param {string | number} message
    */
    writeln: function (message) {
        this.write(message + '\n');
    }
};
function returnTypedData(type, data) {
    var result = (type === 'int' ? parseInt(data, 10) :
        type === 'float' ? parseFloat(data) :
            data);
    if (!result) {
        console.error(chalk_1["default"].red('\nНеправильный формат данных\n'));
        process.exit();
    }
    return result;
}
function hasDefault(params) {
    return process.env.NODE_ENV === 'development' && 'default' in params;
}
