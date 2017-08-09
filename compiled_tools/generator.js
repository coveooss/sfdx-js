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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
var _ = require("underscore");
var path = require("path");
var moment = require("moment");
var child_process_1 = require("child_process");
var Generator = (function () {
    function Generator(SFDXPath, rootDirectory) {
        if (SFDXPath === void 0) { SFDXPath = "sfdx"; }
        if (rootDirectory === void 0) { rootDirectory = path.resolve(__dirname, "./../.."); }
        this.SFDXPath = SFDXPath;
        this.rootDirectory = rootDirectory;
        this.templateHelpers = {};
        this.initializeTemplateHelpers();
    }
    Generator.prototype.generate = function (json) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var commandResult, rootObject, classDefinitions, templateFile, classTemplate, directoryPath, classDefinitionsTemplateElement, templateSFDXFile, sfdxClassTemplate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(json === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.runCommand("force:doc:commands:display --json")];
                    case 1:
                        commandResult = _a.sent();
                        json = commandResult;
                        _a.label = 2;
                    case 2:
                        rootObject = this.parse(json);
                        classDefinitions = {};
                        rootObject.result.forEach(function (result) {
                            if (!result.command) {
                                return;
                            }
                            var className = _this.capitalizeFirstLetter(result.topic);
                            // Check if existing, else creates it.
                            if (!classDefinitions[className]) {
                                classDefinitions[className] = {
                                    apiCommandClass: result.topic,
                                    className: className,
                                    fileName: result.topic,
                                    functionDefinitions: []
                                };
                            }
                            var functionDefinition = {
                                apiCommand: result.command,
                                name: _this.extractFunctionNameFromCommand(result.command),
                                parameters: _this.extractParameters(result),
                                returnType: _this.extractReturnType(result),
                                shortDescription: result.description,
                                description: result.longDescription,
                                example: result.usage,
                                help: result.help
                            };
                            var classNameDefinition = classDefinitions[className];
                            classNameDefinition.functionDefinitions.push(functionDefinition);
                        });
                        templateFile = fs
                            .readFileSync(path.resolve(this.rootDirectory, "./src/generator/templates/class.ejs"))
                            .toString();
                        classTemplate = _.template(templateFile);
                        directoryPath = path.resolve(this.rootDirectory, "./src/generated");
                        try {
                            fs.removeSync(directoryPath);
                        }
                        catch (e) {
                            // Ignore
                        }
                        fs.mkdirSync(directoryPath);
                        _.forEach(classDefinitions, function (classDefinition) {
                            var classImplementation = classTemplate(_this.addTemplateHelper(classDefinition));
                            fs.writeFileSync(path.resolve(_this.rootDirectory, "./src/generated/" + classDefinition.fileName + ".ts"), classImplementation);
                        });
                        classDefinitionsTemplateElement = {
                            classDefinitions: _.map(classDefinitions, function (element) { return element; })
                        };
                        templateSFDXFile = fs
                            .readFileSync(path.resolve(this.rootDirectory, "./src/generator/templates/sfdxClass.ejs"))
                            .toString();
                        sfdxClassTemplate = _.template(templateSFDXFile);
                        fs.writeFileSync(path.resolve(this.rootDirectory, "./src/generated/generatedSFDX.ts"), sfdxClassTemplate(this.addTemplateHelper(classDefinitionsTemplateElement)));
                        return [2 /*return*/];
                }
            });
        });
    };
    Generator.prototype.extractParameters = function (result) {
        var _this = this;
        var parameters = _.map(result.flags, function (flag) {
            var parameter = {
                name: flag.name,
                flagKey: "--" + flag.name,
                type: _this.extractType(flag),
                description: flag.longDescription,
                optional: !flag.required
            };
            return parameter;
        });
        if (result.variableArgs) {
            parameters.push({
                name: "expression",
                description: "The key pair expression for the command",
                flagKey: "",
                optional: !result.variableArgsRequired,
                type: "IStringKeyPair[] | string[] | string"
            });
        }
        return parameters.sort(function (a, b) {
            if (a.optional && b.optional) {
                // Empty flag key should always be on top of other optional parameters.
                if (a.flagKey === "") {
                    return -1;
                }
            }
            return a.optional ? 1 : -1;
        });
    };
    Generator.prototype.extractReturnType = function (result) {
        return "Object";
    };
    Generator.prototype.extractType = function (flag) {
        if (flag.type === "flag") {
            return "Boolean";
        }
        if (flag.name === "loglevel") {
            return "loglevel";
        }
        return "string";
    };
    Generator.prototype.extractApiCommandFromCommand = function (command) {
        var splitElements = command.split(":");
        return splitElements.slice(1, splitElements.length).join(":");
    };
    Generator.prototype.extractFunctionNameFromCommand = function (command) {
        var _this = this;
        var commandParts = command.split(":");
        return _.union([commandParts[0]], _.map(commandParts.splice(1), function (element) {
            return _this.capitalizeFirstLetter(element);
        })).join("");
    };
    Generator.prototype.capitalizeFirstLetter = function (element) {
        return element.charAt(0).toUpperCase() + element.slice(1);
    };
    Generator.prototype.addTemplateHelper = function (element) {
        return _.extend({}, element, this.templateHelpers);
    };
    Generator.prototype.initializeTemplateHelpers = function () {
        this.templateHelpers.escapeForComments = this.escapeForComments;
        this.templateHelpers.getCurrentFormatedDate = this.getCurrentFormatedDate;
    };
    Generator.prototype.escapeForComments = function (element) {
        return element.replace(/\*\//g, "* /").replace(/\n/g, "\n   * ");
    };
    Generator.prototype.getCurrentFormatedDate = function () {
        // Something is weird with moment and typescript. We must call default on the function.
        // https://github.com/aurelia/skeleton-navigation/issues/606
        return moment().format("MMMM Do YYYY, h:mm:ss a");
    };
    Generator.prototype.parse = function (response) {
        // For now it's realllly easy, but maybe someday we'll have to remove some stuff or handle more complex stuff.
        var returnValue = JSON.parse(response);
        return returnValue;
    };
    Generator.prototype.runCommand = function (command, options) {
        var _this = this;
        var executePromise = new Promise(function (resolve, reject) {
            var fullCommand = _this.SFDXPath + " " + command;
            child_process_1.exec(fullCommand, function (error, stdout, stderr) {
                if (!_.isEmpty(stderr) || error !== null) {
                    console.log(error);
                    console.log(stderr);
                    reject(error);
                }
                else {
                    resolve(stdout);
                }
            });
        });
        return executePromise;
    };
    return Generator;
}());
exports.Generator = Generator;
//# sourceMappingURL=generator.js.map