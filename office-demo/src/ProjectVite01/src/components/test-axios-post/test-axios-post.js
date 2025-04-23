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
exports.TestAxiosPost = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const ButtonGroup_1 = __importDefault(require("react-bootstrap/ButtonGroup"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestAxiosPost = ({ className }) => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [action, setAction] = (0, react_1.useState)('login');
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleShowPasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const apiUrl = 'https://zhiyouyuec.com/user-demand-create/';
        const userData = {
            username: 'hank2',
            email: 'choose_last@163.com',
            demand_type: 'AAA',
            demand_description: 'ABC'
        };
        /*
    
        const userData = {
          username: 'hankchenv111', // 用户名
          email: 'choose_last@163.com',
          password: 'chy123hank$A', // 电子邮件
    
        };
       ;
        const userData = {
          username: 'hankchenv111@gmail.com', // 用户名
          password: 'chy123hank$A', // 电子邮件
          password2: 'chy123hank$A', // 密码
         
        };
        const userData = { email, password };
        
        const userData = {
          email: 'choose_last@163.com',
          password: '1234',
          // 添加要发送给Django的数据
        };
        const userData = {
          username: 'hank2', // 用户名
          email: 'hankchenv111@gmail.com', // 电子邮件
          password: 'chy123hank$A', // 密码
         
        };
       
        const userData = {
            username: 'hank',
            email: 'hankchenv@gmail.com',
            demand_type: 'aaa',
            demand_description: '123435666asdf',
         
        };
        */
        /*
        
        
        const dataToSend = {
          key1: 'value1',
          key2: 'value2',
          // 添加要发送给Django的数据
        };
        */
        try {
            //const response = await axios.post('/send-data/',  { email, password } , {
            /*
            const response = await axios.post('/send-data/', userData , {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                //'X-CSRFToken': csrfToken,
              },
              body: JSON.stringify(userData),
            });
            */
            // 设置CSRF令牌作为请求头
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
                },
                body: JSON.stringify(userData),
            };
            const response = yield axios_1.default.post(apiUrl, userData, config);
            //const response = await axios.post('/send-data/', userData);
            //const response = await axios.post(`/api/${action}/`, userData);
            //console.log('Response:',response.data.message);
            console.log('Response from Django:', response.data);
        }
        catch (error) {
            //console.error(error);
            console.error('Error sending data to Django:', error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ButtonGroup_1.default, { size: "lg", className: "mb-2", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "warning", onClick: () => setAction('login'), children: "Login" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "warning", onClick: () => setAction('register'), children: "Register" })] }), (0, jsx_runtime_1.jsxs)("h2", { children: ["User ", action] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "loginEmail", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Email address" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "email", placeholder: "Enter email", value: email, onChange: handleEmailChange, required: true })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { controlId: "loginPassword", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "Password" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: showPassword ? 'text' : 'password', placeholder: "Password", value: password, onChange: handlePasswordChange, required: true }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Check, { type: "checkbox", label: "Show Password", onChange: handleShowPasswordToggle })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { as: "input", type: "submit", value: "Submit" }), ''] })] }));
};
exports.TestAxiosPost = TestAxiosPost;
