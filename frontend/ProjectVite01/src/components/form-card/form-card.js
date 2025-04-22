"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCard = void 0;
const classnames_1 = __importDefault(require("classnames"));
const form_card_module_scss_1 = __importDefault(require("./form-card.module.scss"));
const form_row_1 = require("../form-row/form-row");
const input_1 = require("../input/input");
const inputpw_1 = require("../inputpw/inputpw");
const button_1 = require("../button/button");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormCard = ({ className, formType = 'signin', children }) => {
    const linkresetpw = formType === 'signin' ? (<react_router_dom_1.Link to="/react/resetpw"> Forgot my password </react_router_dom_1.Link>) : (<span />);
    const linkheader = formType === 'signin' ? (<span>Need an account?</span>) : (formType === 'signup' || formType === 'resetpw') ? (<span>Have an account already?</span>) : (<span />);
    const linksign = formType === 'signin' ? (<react_router_dom_1.Link to="/react/signup"> Sign Up </react_router_dom_1.Link>) : (formType === 'signup' || formType === 'resetpw') ? (<react_router_dom_1.Link to="/react/signin"> Sign In </react_router_dom_1.Link>) : (<span />);
    const Inputpwsign = (formType === 'signin' || formType === 'signup') ? (<inputpw_1.Inputpw> Password </inputpw_1.Inputpw>) : (<span />);
    const Inputpwagian = formType === 'signup' ? (<inputpw_1.Inputpw> Confirm password again </inputpw_1.Inputpw>) : (<span />);
    const titlecard = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : formType === 'resetpw' ? 'Reset password' : <span />;
    return (<div className={(0, classnames_1.default)(form_card_module_scss_1.default.root, className)}>
            <a href="https://zhiyouyuec.com">Home</a>
            {children}
            <h1> {titlecard}</h1>
            {linkheader}<span className={form_card_module_scss_1.default.handpoint}>{linksign}</span>
            <form_row_1.FormRow />
            <form_row_1.FormRow children={<input_1.Input />}/>
            <form_row_1.FormRow />
            {Inputpwsign}
            <span className={form_card_module_scss_1.default.handpoint}>{linkresetpw}</span>
            <form_row_1.FormRow />
            {Inputpwagian}
            <form_row_1.FormRow />
            <form_row_1.FormRow children={<button_1.Button> {titlecard} </button_1.Button>}/>

        </div>);
};
exports.FormCard = FormCard;
