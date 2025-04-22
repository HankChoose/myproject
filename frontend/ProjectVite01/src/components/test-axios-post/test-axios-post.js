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
exports.TestAxiosPost = void 0;
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_1 = __importStar(require("react"));
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
    return (<>
      <ButtonGroup_1.default size="lg" className="mb-2">
        <react_bootstrap_1.Button variant="warning" onClick={() => setAction('login')}>Login</react_bootstrap_1.Button>
        <react_bootstrap_1.Button variant="warning" onClick={() => setAction('register')}>Register</react_bootstrap_1.Button>
      </ButtonGroup_1.default>
   
      <h2>User {action}</h2>
        <react_bootstrap_1.Form onSubmit={handleSubmit}>
          <react_bootstrap_1.Form.Group controlId="loginEmail">
            <react_bootstrap_1.Form.Label>Email address</react_bootstrap_1.Form.Label>
            <react_bootstrap_1.Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required/>
          </react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Group controlId="loginPassword">
            <react_bootstrap_1.Form.Label>Password</react_bootstrap_1.Form.Label>
            <react_bootstrap_1.Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={handlePasswordChange} required/>
            <react_bootstrap_1.Form.Check type="checkbox" label="Show Password" onChange={handleShowPasswordToggle}/>
          </react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Button as="input" type="submit" value="Submit"/>{''}
        </react_bootstrap_1.Form>
       
    </>);
};
exports.TestAxiosPost = TestAxiosPost;
