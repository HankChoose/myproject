"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCard = void 0;
const form_card_st_css_1 = require("./form-card.st.css");
const input_1 = require("../input/input");
const inputpw_1 = require("../inputpw/inputpw");
const button_1 = require("../button/button");
const react_1 = __importDefault(require("react"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormCard = ({ className, formType = 'signin', children }) => {
    const linkresetpw = formType === 'signin' ? <a id="resetpw">Forgot my password</a> : formType === 'signup' ? <span /> : <span />;
    const linksign = formType === 'signin' ? <a id="linksignup" href="/signup">Sign Up</a> : formType === 'signup' ? <a id="linksignin" href="/signin">Sign In</a> : <span />;
    const titlecard = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : <span />;
    return <div className={(0, form_card_st_css_1.st)(form_card_st_css_1.classes.root, className)}>
        {children}
        {linksign}
        <h1>{titlecard}</h1>
        <a id="linksignin" href="/signin">Sign In 1111 </a>
        <input_1.Input />
        <a id="linksignin" href="/signup">Sign Up 2222</a>
        <inputpw_1.Inputpw />
        {linkresetpw} 
        <button_1.Button> {titlecard} </button_1.Button>
    </div>;
};
exports.FormCard = FormCard;
