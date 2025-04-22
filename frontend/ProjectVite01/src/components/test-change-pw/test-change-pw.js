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
exports.TestChangePW = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_change_pw_module_scss_1 = __importDefault(require("./test-change-pw.module.scss"));
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestChangePW = ({ className }) => {
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    const [email, setEmail] = (0, react_1.useState)('');
    const handlePasswordReset = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const requestData = {
            email: email,
        };
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            },
            body: JSON.stringify(requestData),
        };
        const apiUrl = `${constants_1.baseUrl}/accounts/password/reset/`;
        try {
            const response = yield axios_1.default.post(apiUrl, requestData, config);
            if (response.status === 200) {
                console.log('Password reset email sent:', response.data);
            }
            else {
                console.error('Password reset email sent failed');
            }
        }
        catch (error) {
            console.error('Error sending password reset email:', error);
        }
    });
    return <div className={(0, classnames_1.default)(test_change_pw_module_scss_1.default.root, className)}>
        <form onSubmit={handlePasswordReset}>
        <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <button type="submit">Send Password Reset Email</button>
        </form>
    
    </div>;
};
exports.TestChangePW = TestChangePW;
