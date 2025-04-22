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
exports.Inputpw = void 0;
const classnames_1 = __importDefault(require("classnames"));
const inputpw_module_scss_1 = __importDefault(require("./inputpw.module.scss"));
const react_1 = __importStar(require("react"));
const rx_1 = require("react-icons/rx");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Inputpw = ({ className }) => {
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (<div className={(0, classnames_1.default)(inputpw_module_scss_1.default.root, className)}>
            <input type={showPassword ? 'text' : 'password'} value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className={inputpw_module_scss_1.default.Input}/>
            <button onClick={togglePasswordVisibility} className={inputpw_module_scss_1.default.Button}>
                {showPassword ? <rx_1.RxEyeClosed /> : <rx_1.RxEyeOpen />}
            </button>
        </div>);
};
exports.Inputpw = Inputpw;
