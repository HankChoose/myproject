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
exports.SignCardSmall = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const sign_card_small_module_scss_1 = __importDefault(require("./sign-card-small.module.scss"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const rx_1 = require("react-icons/rx");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const constants_1 = require("../../constants");
const AuthContext_1 = require("../../AuthContext");
const validationSchemaSignin = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password required'),
});
const validationSchemaSignup = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password agian required'),
});
const validationSchemaResetpw = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^\-]*$/, 'Password cannot contain special characters--')
        .required('Email address is required'),
});
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const SignCardSmall = ({ className, formType = 'signin', onLogin }) => {
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [loginStatus, setLoginStatus] = (0, react_1.useState)(null);
    const [emailExistenceStatus, setEmailExistenceStatus] = (0, react_1.useState)(null);
    const [emailExistAfter, setemailExistAfter] = (0, react_1.useState)(false);
    const { isLoggedIn, signIn, signOut } = (0, AuthContext_1.useAuth)();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
    const navigate = (0, react_router_dom_1.useNavigate)();
    //-------------------------------------------------------->>handleSignIn
    const handleSignIn = (values) => __awaiter(void 0, void 0, void 0, function* () {
        // Logic for handling sign-in form submission
        console.log('Handling sign-in form submission:', values);
        // Add code to submit data for sign-in
        //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
        const apiUrl = `${constants_1.baseUrl}/accounts/login/`;
        const apiUrl2 = `${constants_1.baseUrl}/user-token/`;
        const userData = {
            username: values.email,
            password: values.password,
            // 添加要发送给Django的数据
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            },
        };
        console.log('Handling sign-in form userData:', userData, config);
        try {
            const response = yield axios_1.default.post(apiUrl2, userData, config);
            if (response.status === 200) {
                // 跳转到用户首页或执行其他登录后的逻辑
                //history.push('/userhome');
                console.log('Login OK', response.data);
                localStorage.setItem('accessToken', response.data.token);
                console.log('response2.data.token', response.data.token);
                const loginSuccess = true; /* 模拟请求返回的值 */
                setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
                // 在这里进行你的其他操作，比如存储在本地存储中
                signIn();
                if (onLogin) {
                    onLogin(values.email, values.password);
                }
                else {
                    // Handle the case where onLogin is not defined, if needed
                    console.error('onLogin is not defined');
                }
                navigate('/react/userprofile'); // 在 useEffect 中调用 navigate
            }
            else {
                console.error('Login failed');
                const loginSuccess = false; /* 模拟请求返回的值 */
                setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
            }
            console.log(response.data);
        }
        catch (error) {
            console.error('Error creating user:', error);
            const loginSuccess = false; /* 模拟请求返回的值 */
            setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
        }
    });
    //------------------------------------------------------>heckEmailExistence
    const checkEmailExistence = (values) => __awaiter(void 0, void 0, void 0, function* () {
        const apiUrl = `${constants_1.baseUrl}/check-email-exist/${values.email}/`;
        try {
            const response = yield axios_1.default.get(apiUrl);
            const data = response.data;
            const exists = data.exists;
            if (exists === true) {
                // 邮箱存在的情况下的处理逻辑
                console.log('Email exists!');
                // 执行下一步操作...
                const emailExists = true; /* 模拟请求返回的值 */
                setEmailExistenceStatus(emailExists ? 'The email already in use. click Forgot my password of Sign in to verify the email' : 'OK,Email can be used');
                setemailExistAfter(emailExists);
            }
            else if (exists === false) {
                // 邮箱不存在的情况下的处理逻辑
                console.log('Email does not exist!');
                // 执行下一步操作...
                // 执行下一步操作...
                const emailExists = false; /* 模拟请求返回的值 */
                setEmailExistenceStatus(emailExists ? 'The email already in use. click Forgot my password of Sign in to verify the email' : 'OK,Email can be used');
                setemailExistAfter(emailExists);
                //handleSignUp(values);
            }
            else {
                // 数据尚未加载或加载过程中的处理逻辑
                console.log('Loading data...');
            }
        }
        catch (error) {
            console.error('Error checking email existence:', error);
            throw error;
        }
    });
    //------------------------------------------------------>handleResetPassword
    const handleResetPassword = (values) => __awaiter(void 0, void 0, void 0, function* () {
        // Logic for handling reset password form submission
        console.log('Handling reset password form submission:', values);
        // Add code to submit data for reset password
        //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
        const userData = {
            email: values.email,
        };
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            },
            body: JSON.stringify(userData),
        };
        const apiUrl = `${constants_1.baseUrl}/accounts/password/reset/`;
        try {
            const response = yield axios_1.default.post(apiUrl, userData, config);
            if (response.status === 200) {
                console.log('Password reset email sent:', response.data);
            }
            else {
                console.error('Password reset email sent failed');
            }
        }
        catch (error) {
            console.error('Error sending password reset email:', error);
        }
    });
    const validationSchema = formType === 'signin' ? (validationSchemaSignin) : (formType === 'signup') ? (validationSchemaSignup) : (formType === 'resetpw') ? (validationSchemaResetpw) : ((0, jsx_runtime_1.jsx)("span", {}));
    const linkresetpw = formType === 'signin' ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/resetpw", children: " Forgot my password " })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const linkheader = formType === 'signin' ? ((0, jsx_runtime_1.jsx)("span", { children: "Need an account?" })) : (formType === 'signup' || formType === 'resetpw') ? ((0, jsx_runtime_1.jsx)("span", { children: "Have an account already?" })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const linksign = formType === 'signin' ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/signup", children: " Sign Up " })) : (formType === 'signup' || formType === 'resetpw') ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/signin", children: " Sign In " })) : ((0, jsx_runtime_1.jsx)("span", {}));
    const titlecard = formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : formType === 'resetpw' ? 'Reset password' : (0, jsx_runtime_1.jsx)("span", {});
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (formType === 'signin') {
                handleSignIn(values);
            }
            else if (formType === 'resetpw') {
                handleResetPassword(values);
            }
        },
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.root), children: (0, jsx_runtime_1.jsx)("div", { className: sign_card_small_module_scss_1.default.FromArea, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: formik.handleSubmit, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsxs)("h1", { children: [" ", titlecard] }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRowSmall), children: " " }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: [linkheader, linksign] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.ErrorsArea), children: [loginStatus !== null && (0, jsx_runtime_1.jsx)("p", { children: loginStatus }), emailExistenceStatus !== null && (0, jsx_runtime_1.jsx)("p", { children: emailExistenceStatus })] }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)("input", { type: "text", id: "email", name: "email", placeholder: "Email", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.email, className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.Input) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: formik.touched.email && formik.errors.email ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.ErrorsArea), children: formik.errors.email })) : null })] }), formType === 'signin' || formType === 'signup' ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)("input", { type: showPassword ? 'text' : 'password', id: "password", name: "password", placeholder: "Password", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.password, className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.Inputpw) }), (0, jsx_runtime_1.jsx)("button", { onClick: togglePasswordVisibility, className: sign_card_small_module_scss_1.default.ButtonSee, children: showPassword ? (0, jsx_runtime_1.jsx)(rx_1.RxEyeClosed, {}) : (0, jsx_runtime_1.jsx)(rx_1.RxEyeOpen, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: formik.touched.password && formik.errors.password ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.ErrorsArea), children: formik.errors.password })) : null })] })) : null, (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)("button", { type: "submit", className: sign_card_small_module_scss_1.default.ButtonSubmit, children: titlecard }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRowSmall), children: linkresetpw }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_small_module_scss_1.default.FormRowSmall), children: " " })] }) }) }));
};
exports.SignCardSmall = SignCardSmall;
