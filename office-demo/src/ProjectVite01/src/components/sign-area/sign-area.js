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
exports.SignArea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const sign_area_module_scss_1 = __importDefault(require("./sign-area.module.scss"));
const form_card_1 = require("../form-card/form-card");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
function GotoSignup() {
    const navigate = (0, react_router_dom_1.useNavigate)(); // 在<Router>组件内使用useNavigate
    react_1.default.useEffect(() => {
        navigate('/signup'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return ((0, jsx_runtime_1.jsx)("div", {}));
}
function GotoSignin() {
    const navigate = (0, react_router_dom_1.useNavigate)(); // 在<Router>组件内使用useNavigate
    react_1.default.useEffect(() => {
        navigate('/signin'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return ((0, jsx_runtime_1.jsx)("div", {}));
}
function GotoResetpw() {
    const navigate = (0, react_router_dom_1.useNavigate)(); // 在<Router>组件内使用useNavigate
    react_1.default.useEffect(() => {
        navigate('/resetpw'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return ((0, jsx_runtime_1.jsx)("div", {}));
}
const SignArea = ({ className }) => {
    const [isInternalControlClicked, setInternalControlClicked] = (0, react_1.useState)('');
    const handleInternalControlClick = (value) => {
        // 当内部控件被点击时，更新状态变量
        setInternalControlClicked(value);
    };
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_area_module_scss_1.default.root, className), children: [isInternalControlClicked === "signup" ? (0, jsx_runtime_1.jsx)(GotoSignup, {}) : (0, jsx_runtime_1.jsx)(GotoSignin, {}), isInternalControlClicked === "signin" ? (0, jsx_runtime_1.jsx)(GotoSignin, {}) : (0, jsx_runtime_1.jsx)(GotoSignin, {}), isInternalControlClicked === "resetpw" ? (0, jsx_runtime_1.jsx)(GotoResetpw, {}) : (0, jsx_runtime_1.jsx)(GotoSignin, {}), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signin", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signin", callbackFunction: handleInternalControlClick }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signup", callbackFunction: handleInternalControlClick }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/resetpw", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "resetpw", callbackFunction: handleInternalControlClick }) })] }) })] });
};
exports.SignArea = SignArea;
