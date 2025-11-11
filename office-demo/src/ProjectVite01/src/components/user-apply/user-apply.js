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
exports.UserApply = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const user_apply_module_scss_1 = __importDefault(require("./user-apply.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const userInfoActions_1 = require("../../actions/userInfoActions");
const react_router_dom_1 = require("react-router-dom");
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const react_modal_1 = __importDefault(require("react-modal"));
const AuthContext_1 = require("../../AuthContext");
const sign_card_1 = require("../sign-card/sign-card");
const apiService_1 = require("../../apiService");
const modalStyles = {
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(203, 196, 223, 0.5)', // 背景颜色，可根据需要修改
        zIndex: 1000, // 调整 overlay 的 z-index
    },
    content: {
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        //border: 'none', // 移除边框
        //background: 'transparent', // 设定透明背景
        padding: 0, // 移除默认 padding
        borderRadius: 0, // 可以根据需要设置圆角
    },
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const UserApply = ({ className }) => {
    const userInfo = (0, react_redux_1.useSelector)((state) => state.userInfo);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [userData, setUserData] = (0, react_1.useState)([]);
    const { isLoggedIn, signIn, signOut } = (0, AuthContext_1.useAuth)();
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const token = localStorage.getItem('accessToken');
    const navigate = (0, react_router_dom_1.useNavigate)();
    // 在组件渲染时检查isLoggedIn状态，如果为false，则打开modal
    (0, react_1.useEffect)(() => {
        if (!isLoggedIn) {
            setIsModalOpen(true);
        }
        else {
            fetchData();
        }
    }, [isLoggedIn]);
    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-profile/`;
        try {
            const data = yield (0, apiService_1.fetch_data_token_get)(apiUrl, token);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            }
            else {
                console.log('fetchData response:', data);
            }
            setUserData(data);
        }
        catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    });
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleLogin = (username, password) => {
        // 在这里处理登录逻辑，可以向服务器发送请求等
        console.log('登录成功', username);
        // 在登录成功后，关闭模态框
        closeModal();
    };
    const handleNameChange = (e) => {
        dispatch((0, userInfoActions_1.updateName)(e.target.value));
        console.log('Name is:', e.target.value);
    };
    const handleEmailChange = (e) => {
        dispatch((0, userInfoActions_1.updateEmail)(e.target.value));
        console.log('Email is:', e.target.value);
    };
    const handleSubmission = () => {
        console.log('userInfo:', userInfo);
    };
    const handleLinkClick = (event) => {
        // 如果未登录，打开 modal，否则跳转到下一页
        event.preventDefault();
        console.log('isLoggedIn:', isLoggedIn);
        if (!isLoggedIn) {
            console.log('openModal:openModal');
            openModal();
        }
        else {
            // 在这里可以使用编程式导航，或者使用 Link 跳转
            console.log('navigate:/react/userapply2');
            navigate('/react/userapply2');
            initialdispatch();
        }
    };
    const firstusername = userData.length > 0 ? userData[0].username : undefined;
    const firstEmail = userData.length > 0 ? userData[0].email : undefined;
    const initialdispatch = () => __awaiter(void 0, void 0, void 0, function* () {
        // 获取保存在本地存储中的令牌
        if (firstusername) {
            // 调用navigate函数
            dispatch((0, userInfoActions_1.updateName)(firstusername));
        }
        else {
            // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
            console.error('firstusername is undefined');
        }
        if (firstEmail) {
            // 调用navigate函数
            dispatch((0, userInfoActions_1.updateEmail)(firstEmail));
        }
        else {
            // 处理redirectLink为undefined的情况，例如给出一个默认值或者采取其他逻辑
            console.error('firstEmail is undefined');
        }
    });
    const rootElement = document.getElementById('root');
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.flowImage) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow) }), (0, jsx_runtime_1.jsxs)("div", { className: user_apply_module_scss_1.default.FromArea, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)(Form_1.default.Control, { type: "text", placeholder: firstusername, value: userInfo.name, readOnly: true, onChange: handleNameChange }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow), children: (0, jsx_runtime_1.jsx)(Form_1.default.Control, { type: "text", placeholder: firstEmail, value: userInfo.email, readOnly: true, onChange: handleEmailChange }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow) }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow) }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(user_apply_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsxs)("a", { href: "https://hankchenv.com", children: [" ", (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "primary", children: "Cancel" }), ' '] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/react/userapply2", onClick: handleLinkClick, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "primary", children: "Next page" }), ' '] })] })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_modal_1.default, { isOpen: isModalOpen, onRequestClose: closeModal, contentLabel: "Modal Dialog", ariaHideApp: true, shouldCloseOnOverlayClick: true, style: modalStyles, children: (0, jsx_runtime_1.jsx)(sign_card_1.SignCard, { redirectLink: "/react/userapply", onLogin: handleLogin }) }) })] }));
};
exports.UserApply = UserApply;
