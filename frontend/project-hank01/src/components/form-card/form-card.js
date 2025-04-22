"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const react_1 = __importStar(require("react"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const FormCard = ({ className, formType = 'signin', children }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const handleSignin = () => {
        // 在链接被点击时修改input的值
        setInputValue('signin');
    };
    const handleSignup = () => {
        // 在链接被点击时修改input的值
        setInputValue('signup');
    };
    const handleResetpw = () => {
        // 在链接被点击时修改input的值
        setInputValue('resetpw');
    };
    const linkresetpw = formType === 'signin' ? <a id="resetpw" onClick={handleResetpw}>Forgot my password</a> : formType === 'signup' ? <span /> : <span />;
    const linksign = formType === 'signin' ? <a id="linksignup" onClick={handleSignup}>Sign Up</a> : formType === 'signup' ? <a id="linksignin" onClick={handleSignin}>Sign In</a> : <span />;
    const titlecard = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : <span />;
    const MyContext = react_1.default.createContext("Default Value");
    return (<div className={(0, classnames_1.default)(form_card_module_scss_1.default.root, className)}>

            <input type="text" value={inputValue} readOnly/>
            {children}
            <h1>{titlecard}</h1>
            <MyContext.Consumer>
            {value => <div>{value}</div>}
            </MyContext.Consumer>
            {linksign}
            <form_row_1.FormRow />
            <form_row_1.FormRow children={<input_1.Input />}/>
            <form_row_1.FormRow />
            <inputpw_1.Inputpw />
            {linkresetpw} 
            <form_row_1.FormRow />
            <form_row_1.FormRow children={<button_1.Button> {titlecard} </button_1.Button>}/>
            <form_row_1.FormRow />
           
        </div>);
};
exports.FormCard = FormCard;
