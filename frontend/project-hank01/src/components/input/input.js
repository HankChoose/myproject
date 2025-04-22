"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const classnames_1 = __importDefault(require("classnames"));
const input_module_scss_1 = __importDefault(require("./input.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Input = ({ className, id, name }) => {
    return (<div className={(0, classnames_1.default)(input_module_scss_1.default.root, className)}>
            <input className={input_module_scss_1.default.Input} placeholder="Email"></input>
        </div>);
};
exports.Input = Input;
