"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRow = void 0;
const classnames_1 = __importDefault(require("classnames"));
const form_row_module_scss_1 = __importDefault(require("./form-row.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormRow = ({ className, children }) => {
    return <div className={(0, classnames_1.default)(form_row_module_scss_1.default.root, className)}> {children} </div>;
};
exports.FormRow = FormRow;
