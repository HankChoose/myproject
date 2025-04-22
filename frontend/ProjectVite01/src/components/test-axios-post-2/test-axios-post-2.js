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
exports.TestAxiosPost2 = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestAxiosPost2 = ({ className }) => {
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };
    const [formData, setFormData] = (0, react_1.useState)({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const navigate = (0, react_router_dom_1.useNavigate)();
        const apiUrl = `${constants_1.baseUrl}/accounts/signup/`;
        const apiUrl2 = `${constants_1.baseUrl}/user-token/`;
        try {
            const response = yield axios_1.default.post(apiUrl, formData, config);
            console.log(response.data);
            if (response.status === 200) {
                // 跳转到用户首页或执行其他登录后的逻辑
                //history.push('/userhome');
                console.log('Login OK', response.data);
                const response2 = yield axios_1.default.post(apiUrl2, {
                    username: formData.email,
                    password: formData.password1,
                });
                console.log('Login2 OK', response2.data);
                localStorage.setItem('accessToken', response2.data.token);
                console.log('response2.data.token', response2.data.token);
                // 在这里进行你的其他操作，比如存储在本地存储中
                navigate('/react/userprofile'); // 在 useEffect 中调用 navigate
            }
            else {
                console.error('Login failed');
            }
        }
        catch (error) {
            console.error('Error creating user:', error);
        }
    });
    return (<form onSubmit={handleSubmit}>
        <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
        </label>

        <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </label>

        <label>
            Password:
            <input type="password" name="password1" value={formData.password1} onChange={handleChange}/>
        </label>

        <label>
            Confirm Password:
            <input type="password" name="password2" value={formData.password2} onChange={handleChange}/>
        </label>

        <button type="submit">Sign Up</button>
        </form>);
};
exports.TestAxiosPost2 = TestAxiosPost2;
