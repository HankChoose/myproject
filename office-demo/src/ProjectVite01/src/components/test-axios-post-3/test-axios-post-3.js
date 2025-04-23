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
exports.TestAxiosPost3 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_router_dom_1 = require("react-router-dom");
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestAxiosPost3 = ({ className }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };
    const [formData, setFormData] = (0, react_1.useState)({
        login: '',
        password: '',
    });
    const apiUrl = `${constants_1.baseUrl}/accounts/login/`;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const response = yield axios_1.default.post(apiUrl, formData, config);
            if (response.status === 200) {
                // 跳转到用户首页或执行其他登录后的逻辑
                //history.push('/userhome');
                console.log('Login OK', response.data);
                const response2 = yield axios_1.default.post('/user-token/', {
                    username: formData.login,
                    password: formData.password,
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
            console.log(response.data);
        }
        catch (error) {
            console.error('Error creating user:', error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("label", { children: ["Username:", (0, jsx_runtime_1.jsx)("input", { type: "text", name: "login", value: formData.login, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("label", { children: ["Password:", (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", value: formData.password, onChange: handleChange })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Sign Up" })] }));
};
exports.TestAxiosPost3 = TestAxiosPost3;
