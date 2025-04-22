"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test4 = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_4_module_scss_1 = __importDefault(require("./test-4.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Test4 = ({ className }) => {
    return <div className={(0, classnames_1.default)(test_4_module_scss_1.default.root, className)}>Test4</div>;
};
exports.Test4 = Test4;
