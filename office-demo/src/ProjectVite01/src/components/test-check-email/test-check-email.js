"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCheckEmail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_check_email_module_scss_1 = __importDefault(require("./test-check-email.module.scss"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestCheckEmail = ({ className }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [emailExists, setEmailExists] = (0, react_1.useState)(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const checkEmailExist = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`/api/check-email-exist/${email}/`);
            const data = response.data;
            setEmailExists(data.exists);
        }
        catch (error) {
            console.error('Error checking email existence:', error);
        }
    });
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_check_email_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_check_email_module_scss_1.default.FormRow), children: [" ", (0, jsx_runtime_1.jsx)("a", { href: constants_1.baseUrl, children: "Home" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Enter email", value: email, onChange: handleEmailChange }), (0, jsx_runtime_1.jsx)("button", { onClick: checkEmailExist, children: "Check Email Existence" }), emailExists ? 'Email exists in the database' : 'Email does not exist'] });
};
exports.TestCheckEmail = TestCheckEmail;
