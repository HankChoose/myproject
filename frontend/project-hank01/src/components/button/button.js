"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const classnames_1 = __importDefault(require("classnames"));
const button_module_scss_1 = __importDefault(require("./button.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Button = ({ className, children }) => {
    return (<div className={(0, classnames_1.default)(button_module_scss_1.default.root, className)}>
            <button className={button_module_scss_1.default.Button}> {children} </button>
        </div>);
};
exports.Button = Button;
