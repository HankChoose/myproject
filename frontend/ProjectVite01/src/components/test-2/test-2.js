"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test2 = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_2_module_scss_1 = __importDefault(require("./test-2.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Test2 = ({ className }) => {
    return <div className={(0, classnames_1.default)(test_2_module_scss_1.default.root, className)}>Test2</div>;
};
exports.Test2 = Test2;
