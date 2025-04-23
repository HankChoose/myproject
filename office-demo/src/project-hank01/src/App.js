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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const App_module_scss_1 = __importDefault(require("./App.module.scss"));
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const linkarea_2_1 = require("./components/linkarea-2/linkarea-2");
function App() {
    const [showDefaultComponent, setShowDefaultComponent] = (0, react_1.useState)(true);
    const [count, setCount] = (0, react_1.useState)(0);
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [action, setAction] = (0, react_1.useState)('login');
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    /*
    function handleOnSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('event', event);
    }
    */
    const handleOnSubmit = (event) => __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const userData = { email, password };
        try {
            // 设置CSRF令牌作为请求头
            const config = {
                headers: {
                    'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
                },
            };
            const response = yield axios_1.default.post('/send-data/', userData, config);
            //const response = await axios.post(`/api/${action}/`, userData);
            //console.log('Response:',response.data.message);
            console.log('Response from Django:', response.data);
        }
        catch (error) {
            //console.error(error);
            console.error('Error sending data to Django:', error);
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: App_module_scss_1.default.App, children: (0, jsx_runtime_1.jsx)(linkarea_2_1.Linkarea2, {}) }));
}
exports.default = App;
