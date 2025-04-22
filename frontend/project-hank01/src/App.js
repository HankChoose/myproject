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
const react_1 = __importStar(require("react"));
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
    return (<div className={App_module_scss_1.default.App}>
            <linkarea_2_1.Linkarea2 />
        </div>);
}
exports.default = App;
