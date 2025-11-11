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
exports.TopBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const top_bar_module_scss_1 = __importDefault(require("./top-bar.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = require("react");
const constants_1 = require("../../constants");
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_router_dom_1 = require("react-router-dom");
const bs_1 = require("react-icons/bs");
const fa_1 = require("react-icons/fa");
const AuthContext_1 = require("../../AuthContext");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TopBar = ({ className }) => {
    const { isLoggedIn, signIn, signOut } = (0, AuthContext_1.useAuth)();
    (0, react_1.useEffect)(() => {
        document.title = 'hankchenv';
    }, []);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogout = () => __awaiter(void 0, void 0, void 0, function* () {
        const token = localStorage.getItem('accessToken');
        const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
        const apiUrl = `${constants_1.baseUrl}/accounts/logout/`;
        try {
            // 向服务器发送登出请求
            const response = yield fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`, // 注意这里的格式，应为 `Token ${token}`
                },
            });
            if (response.ok) {
                localStorage.removeItem('accessToken');
                // 处理成功登出的逻辑，例如重定向到登录页面
                signOut();
                navigate('/react/signin'); // 在 useEffect 中调用 navigate
            }
            else {
                // 处理登出失败的情况
                console.error('Logout failed');
            }
        }
        catch (error) {
            console.error('Error during logout:', error);
        }
    });
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(top_bar_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(top_bar_module_scss_1.default.toRow), children: [(0, jsx_runtime_1.jsx)("a", { href: "https://hankchenv.com", children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(top_bar_module_scss_1.default.toRow), children: [(0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)(top_bar_module_scss_1.default.logoImage) }), (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)(top_bar_module_scss_1.default.logoWord) })] }) }), (0, jsx_runtime_1.jsxs)("a", { href: "https://hankchenv.com", children: [(0, jsx_runtime_1.jsx)(bs_1.BsHouseFill, {}), "Home"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(top_bar_module_scss_1.default.toRowUser), children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/react/testlisdatatable", children: [(0, jsx_runtime_1.jsx)(fa_1.FaSearch, {}), "Search"] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/react/userapply", children: [(0, jsx_runtime_1.jsx)(bs_1.BsSendPlusFill, {}), "Post Info"] }), isLoggedIn ? (
                    // 用户已登录，显示账户信息和登出按钮
                    (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/react/userprofile", children: [(0, jsx_runtime_1.jsx)(bs_1.BsPersonVcard, {}), "My Account"] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/react/signin", onClick: handleLogout, children: [(0, jsx_runtime_1.jsx)(bs_1.BsPersonFillDash, {}), "Log Out"] })] })) : (
                    // 用户未登录，显示登录按钮或登录表单
                    (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/react/signin", children: [(0, jsx_runtime_1.jsx)(bs_1.BsPersonUp, {}), "Sign In"] }))] })] });
};
exports.TopBar = TopBar;
