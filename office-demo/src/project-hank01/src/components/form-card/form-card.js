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
const jsx_runtime_1 = require("react/jsx-runtime");
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
    const linkresetpw = formType === 'signin' ? (0, jsx_runtime_1.jsx)("a", { id: "resetpw", onClick: handleResetpw, children: "Forgot my password" }) : formType === 'signup' ? (0, jsx_runtime_1.jsx)("span", {}) : (0, jsx_runtime_1.jsx)("span", {});
    const linksign = formType === 'signin' ? (0, jsx_runtime_1.jsx)("a", { id: "linksignup", onClick: handleSignup, children: "Sign Up" }) : formType === 'signup' ? (0, jsx_runtime_1.jsx)("a", { id: "linksignin", onClick: handleSignin, children: "Sign In" }) : (0, jsx_runtime_1.jsx)("span", {});
    const titlecard = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : (0, jsx_runtime_1.jsx)("span", {});
    const MyContext = react_1.default.createContext("Default Value");
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(form_card_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: inputValue, readOnly: true }), children, (0, jsx_runtime_1.jsx)("h1", { children: titlecard }), (0, jsx_runtime_1.jsx)(MyContext.Consumer, { children: value => (0, jsx_runtime_1.jsx)("div", { children: value }) }), linksign, (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {}), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, { children: (0, jsx_runtime_1.jsx)(input_1.Input, {}) }), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {}), (0, jsx_runtime_1.jsx)(inputpw_1.Inputpw, {}), linkresetpw, (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {}), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, { children: (0, jsx_runtime_1.jsxs)(button_1.Button, { children: [" ", titlecard, " "] }) }), (0, jsx_runtime_1.jsx)(form_row_1.FormRow, {})] }));
};
exports.FormCard = FormCard;
