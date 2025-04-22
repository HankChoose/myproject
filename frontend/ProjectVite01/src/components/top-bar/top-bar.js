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
exports.TopBar = void 0;
const classnames_1 = __importDefault(require("classnames"));
const top_bar_module_scss_1 = __importDefault(require("./top-bar.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = __importStar(require("react"));
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
        document.title = 'Zhiyouyuec';
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
    return <div className={(0, classnames_1.default)(top_bar_module_scss_1.default.root, className)}>

        <div className={(0, classnames_1.default)(top_bar_module_scss_1.default.toRow)}>
            <a href="https://zhiyouyuec.com">
                <div className={(0, classnames_1.default)(top_bar_module_scss_1.default.toRow)}>
                    <span className={(0, classnames_1.default)(top_bar_module_scss_1.default.logoImage)}></span>
                    <span className={(0, classnames_1.default)(top_bar_module_scss_1.default.logoWord)}></span>
                </div>
            </a>
            <a href="https://zhiyouyuec.com"><bs_1.BsHouseFill />Home</a>

        </div>
        
        <div className={(0, classnames_1.default)(top_bar_module_scss_1.default.toRowUser)}>

           
            <react_router_dom_1.Link to="/react/testlisdatatable"><fa_1.FaSearch />Search</react_router_dom_1.Link>
            <react_router_dom_1.Link to="/react/userapply"><bs_1.BsSendPlusFill />Post Info</react_router_dom_1.Link>
            {isLoggedIn ? (
        // 用户已登录，显示账户信息和登出按钮
        <>
                    <react_router_dom_1.Link to="/react/userprofile"><bs_1.BsPersonVcard />My Account</react_router_dom_1.Link>
                    <react_router_dom_1.Link to="/react/signin" onClick={handleLogout}><bs_1.BsPersonFillDash />Log Out</react_router_dom_1.Link>
                    
                </>) : (
        // 用户未登录，显示登录按钮或登录表单
        <react_router_dom_1.Link to="/react/signin"><bs_1.BsPersonUp />Sign In</react_router_dom_1.Link>)}

            

        </div>

    </div>;
};
exports.TopBar = TopBar;
