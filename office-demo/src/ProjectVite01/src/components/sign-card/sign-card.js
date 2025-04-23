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
exports.SignCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const sign_card_module_scss_1 = __importDefault(require("./sign-card.module.scss"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const rx_1 = require("react-icons/rx");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AuthContext_1 = require("../../AuthContext");
const apiService_1 = require("../../apiService");
const constants_1 = require("../../constants");
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
const SignCard = ({ className, formType = 'signin', redirectLink, onLogin }) => {
    const [password, setPassword] = (0, react_1.useState)('');
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [loginStatus, setLoginStatus] = (0, react_1.useState)(null);
    const [emailExistenceStatus, setEmailExistenceStatus] = (0, react_1.useState)(null);
    const [emailExistAfter, setemailExistAfter] = (0, react_1.useState)(false);
    const { isLoggedIn, signIn, signOut } = (0, AuthContext_1.useAuth)();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = (0, react_router_dom_1.useNavigate)();
    //-------------------------------------------------------->>handleSignIn
    const handleSignIn = (values) => __awaiter(void 0, void 0, void 0, function* () {
        // Logic for handling sign-in form submission
        console.log('Handling sign-in form submission:', values);
        // Add code to submit data for sign-in
        const apiUrl = `/user-token/`;
        const userData = {
            username: values.email,
            password: values.password,
            // 添加要发送给Django的数据
        };
        console.log('Handling sign-in form userData:', userData);
        try {
            const data = yield (0, apiService_1.axios_json_data_post)(apiUrl, userData);
            if (data.error) {
                console.log('GET Response sign fail data.message:', data.message);
                const loginSuccess = false; /* 模拟请求返回的值 */
                setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
            }
            else {
                if (constants_1.isLogVisible) {
                    console.log('GET Response sign OK:', data);
                }
                localStorage.setItem('accessToken', data.token);
                if (constants_1.isLogVisible) {
                    console.log('GET Response.data.token', data.token);
                }
                const loginSuccess = true; /* 模拟请求返回的值 */
                setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
                // 在这里进行你的其他操作，比如存储在本地存储中
                signIn();
                if (onLogin) {
                    onLogin(values.email, values.password);
                }
                else {
                    // Handle the case where onLogin is not defined, if needed
                    if (constants_1.isLogErrorVisible) {
                        console.error('onLogin is not defined');
                    }
                }
                if (redirectLink) {
                    // 调用navigate函数
                    navigate(redirectLink);
                }
                else {
                    // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
                    console.error('redirectLink is undefined');
                }
            }
        }
        catch (error) {
            // 处理错误
            console.error('handleSignIn error:', error);
            const loginSuccess = false; /* 模拟请求返回的值 */
            setLoginStatus(loginSuccess ? 'Login successful' : 'Email or password is incorrect');
        }
    });
    //------------------------------------------------------->handleSignUp
    const handleSignUp = (values) => __awaiter(void 0, void 0, void 0, function* () {
        // Logic for handling sign-up form submission
        if (constants_1.isLogVisible) {
            console.log('Handling sign-up form submission:', values);
        }
        // Add code to submit data for sign-up
        const apiUrl = `/accounts/signup/`;
        // Split the email address at the "@" symbol
        const parts = values.email.split('@');
        const userData = {
            username: parts[0],
            email: values.email,
            password1: values.password,
            password2: values.password,
            // 添加要发送给Django的数据
        };
        if (constants_1.isLogVisible) {
            console.log('Handling sign-up form userData:', userData);
        }
        try {
            const data = yield (0, apiService_1.axios_form_data_post)(apiUrl, userData, 'multipart/form-data');
            if (data.error) {
                console.log('GET Response signup failed data.message:', data.message);
            }
            else {
                console.log('GET Response Signup OK:', data);
                const apiUrl2 = `/user-token/`;
                const userData2 = {
                    username: values.email,
                    password: values.password,
                    // 添加要发送给Django的数据
                };
                console.log('Handling sign-up form userData2:', userData2);
                const data2 = yield (0, apiService_1.axios_json_data_post)(apiUrl2, userData2);
                if (data2.error) {
                    console.log('GET Response signup get token fail data.message:', data.message);
                    const loginSuccess = false; /* 模拟请求返回的值 */
                }
                else {
                    if (constants_1.isLogVisible) {
                        console.log('GET Response signup get token OK:', data2);
                    }
                    localStorage.setItem('accessToken', data2.token);
                    if (constants_1.isLogVisible) {
                        console.log('GET Response.data2.token', data2.token);
                    }
                    // 在这里进行你的其他操作，比如存储在本地存储中
                    signIn();
                    if (onLogin) {
                        onLogin(values.email, values.password);
                    }
                    else {
                        // Handle the case where onLogin is not defined, if needed
                        console.error('onLogin is not defined');
                    }
                    if (redirectLink) {
                        // 调用navigate函数
                        navigate(redirectLink);
                    }
                    else {
                        // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
                        console.error('redirectLink is undefined');
                    }
                }
            }
        }
        catch (error) {
            // 处理错误
            console.error('handleSignUp error:', error);
        }
    });
    //------------------------------------------------------>heckEmailExistence
    const checkEmailExistence = (values) => __awaiter(void 0, void 0, void 0, function* () {
        const apiUrl = `/check-email-exist/${values.email}/`;
        try {
            const data = yield (0, apiService_1.axios_json_data_get)(apiUrl);
            if (data.error) {
                console.log('GET Response Password reset email sent: failed data.message:', data.message);
            }
            else {
                console.log('GET Response Password reset email sent:', data);
                const exists = data.exists;
                if (exists === true) {
                    // 邮箱存在的情况下的处理逻辑
                    console.log('Email exists!');
                    // 执行下一步操作...
                    const emailExists = true; /* 模拟请求返回的值 */
                    setEmailExistenceStatus(emailExists ? 'The email already in use. click Forgot my password of Sign in to verify the email' : '');
                    setemailExistAfter(emailExists);
                }
                else if (exists === false) {
                    // 邮箱不存在的情况下的处理逻辑
                    console.log('Email does not exist!');
                    // 执行下一步操作...
                    // 执行下一步操作...
                    const emailExists = false; /* 模拟请求返回的值 */
                    setEmailExistenceStatus(emailExists ? 'The email already in use. click Forgot my password of Sign in to verify the email' : '');
                    setemailExistAfter(emailExists);
                    //handleSignUp(values);
                }
                else {
                    // 数据尚未加载或加载过程中的处理逻辑
                    console.log('Loading data...');
                }
            }
        }
        catch (error) {
            // 处理错误
            console.error('checkEmailExistence error:', error);
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
        const apiUrl = `/accounts/password/reset/`;
        try {
            const data = yield (0, apiService_1.axios_form_data_post)(apiUrl, userData, 'application/x-www-form-urlencoded');
            if (data.error) {
                console.log('GET Response Password reset email sent: failed data.message:', data.message);
            }
            else {
                console.log('GET Response Password reset email sent:', data);
                if (onLogin) {
                    onLogin(values.email, values.password);
                }
                else {
                    // Handle the case where onLogin is not defined, if needed
                    console.error('onLogin is not defined');
                }
            }
        }
        catch (error) {
            // 处理错误
            console.error('handleResetPassword error:', error);
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
            else if (formType === 'signup') {
                checkEmailExistence(values);
                if (emailExistAfter === true) {
                    // 邮箱存在的情况下的处理逻辑
                    console.log('Hank:Email exists!');
                }
                else {
                    console.log('Hank:Email not exists!');
                    handleSignUp(values);
                }
            }
            else if (formType === 'resetpw') {
                handleResetPassword(values);
            }
        },
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.root), children: (0, jsx_runtime_1.jsx)("div", { className: sign_card_module_scss_1.default.FromArea, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: formik.handleSubmit, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsxs)("h1", { children: [" ", titlecard] }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRowSmall), children: " " }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: [linkheader, linksign] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.ErrorsArea), children: [loginStatus !== null && (0, jsx_runtime_1.jsx)("p", { children: loginStatus }), emailExistenceStatus !== null && (0, jsx_runtime_1.jsx)("p", { children: emailExistenceStatus })] }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)("input", { type: "text", id: "email", name: "email", placeholder: "Email", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.email, className: (0, classnames_1.default)(sign_card_module_scss_1.default.Input) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: formik.touched.email && formik.errors.email ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.ErrorsArea), children: formik.errors.email })) : null })] }), formType === 'signin' || formType === 'signup' ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)("input", { type: showPassword ? 'text' : 'password', id: "password", name: "password", placeholder: "Password", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.password, className: (0, classnames_1.default)(sign_card_module_scss_1.default.Inputpw) }), (0, jsx_runtime_1.jsx)("button", { onClick: togglePasswordVisibility, className: sign_card_module_scss_1.default.ButtonSee, children: showPassword ? (0, jsx_runtime_1.jsx)(rx_1.RxEyeClosed, {}) : (0, jsx_runtime_1.jsx)(rx_1.RxEyeOpen, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: formik.touched.password && formik.errors.password ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.ErrorsArea), children: formik.errors.password })) : null })] })) : null, formType === 'signup' ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)("input", { type: showPassword ? 'text' : 'password', id: "confirmPassword", name: "confirmPassword", placeholder: "Password again", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.confirmPassword, className: (0, classnames_1.default)(sign_card_module_scss_1.default.Inputpw) }), (0, jsx_runtime_1.jsx)("button", { onClick: togglePasswordVisibility, className: sign_card_module_scss_1.default.ButtonSee, children: showPassword ? (0, jsx_runtime_1.jsx)(rx_1.RxEyeClosed, {}) : (0, jsx_runtime_1.jsx)(rx_1.RxEyeOpen, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: formik.touched.confirmPassword && formik.errors.confirmPassword ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.ErrorsArea), children: formik.errors.confirmPassword })) : null })] })) : null, (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)("button", { type: "submit", className: sign_card_module_scss_1.default.ButtonSubmit, children: titlecard }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRowSmall), children: linkresetpw }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(sign_card_module_scss_1.default.FormRowSmall), children: " " })] }) }) }));
};
exports.SignCard = SignCard;
