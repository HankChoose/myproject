"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const classnames_1 = __importDefault(require("classnames"));
const link_module_scss_1 = __importDefault(require("./link.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Link = ({ className, children }) => {
    return (<div className={(0, classnames_1.default)(link_module_scss_1.default.root, className)}>
            <a href="/">{children}</a>
         
        </div>);
};
exports.Link = Link;
