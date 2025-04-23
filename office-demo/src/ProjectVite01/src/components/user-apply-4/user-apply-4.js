"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApply4 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const user_apply_4_module_scss_1 = __importDefault(require("./user-apply-4.module.scss"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const UserApply4 = ({ className }) => {
    const navigate = (0, react_router_dom_1.useNavigate)(); // 在<Router>组件内使用useNavigate
    react_1.default.useEffect(() => {
        navigate('/react/testlisdatatable'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_4_module_scss_1.default.root, className), children: "UserApply4" });
};
exports.UserApply4 = UserApply4;
