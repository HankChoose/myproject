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
exports.UserProfile = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const user_profile_module_scss_1 = __importDefault(require("./user-profile.module.scss"));
const react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const apiService_1 = require("../../apiService");
const constants_1 = require("../../constants");
const UserProfile = ({ className }) => {
    const [userData, setUserData] = (0, react_1.useState)([]);
    const [isVerified, setIsVerified] = (0, react_1.useState)(false);
    const [editing, setEditing] = (0, react_1.useState)(false);
    //const [editable, setEditable] = useState(false);
    const [username, setUsername] = (0, react_1.useState)(''); // Initial username
    const token = localStorage.getItem('accessToken');
    const [viewMode, setViewMode] = (0, react_1.useState)('list'); // 初始视图模式为列表
    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === 'list' ? 'grid' : 'list'));
    };
    (0, react_1.useEffect)(() => {
        // 在组件加载时发送请求
        fetchData();
    }, []);
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
    const handleEdit = () => {
        setEditing(true);
    };
    const handleSave = () => {
        // 处理保存逻辑，比如将 username 提交到服务器
        handleChangeUsername();
        fetchData();
        setEditing(false);
    };
    const handleCancel = () => {
        // 处理取消编辑逻辑，比如还原原始的 username
        setEditing(false);
    };
    const firstusername = userData.length > 0 ? userData[0].username : undefined;
    const firstEmail = userData.length > 0 ? userData[0].email : null;
    const handleChangeUsername = () => __awaiter(void 0, void 0, void 0, function* () {
        const apiUrl = `/user-change-username/`;
        try {
            const data = yield (0, apiService_1.fetch_data_token_post)(apiUrl, token, username);
            if (data.error) {
                if (constants_1.isLogVisible) {
                    console.log('handleChangeUsername response data.message:', data.message);
                }
            }
            else {
                if (constants_1.isLogVisible) {
                    console.log('handleChangeUsername response:', data);
                }
            }
        }
        catch (error) {
            // 处理错误
            console.error('fhandleChangeUsername error:', error);
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { style: { width: '60vw' }, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { children: (0, jsx_runtime_1.jsx)("h1", { children: "User Home" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Text, {})] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.ListGroup, { className: "list-group-flush", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup.Item, { children: (0, jsx_runtime_1.jsxs)("h3", { children: ["Welcome! ", firstusername] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup.Item, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Table, { striped: true, bordered: true, hover: true, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { style: { width: '150px' }, children: "Item" }), (0, jsx_runtime_1.jsx)("th", { children: "Content" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Username:" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("div", { children: editing ? ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(user_profile_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: username, className: (0, classnames_1.default)(user_profile_module_scss_1.default.Input), placeholder: firstusername, onChange: (e) => setUsername(e.target.value) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", size: "sm", onClick: handleSave, children: "Save" }), ' ', (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", size: "sm", onClick: handleCancel, children: "Cancel" }), ' '] })) : ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(user_profile_module_scss_1.default.FormRow), children: [(0, jsx_runtime_1.jsx)("span", { children: firstusername }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", size: "sm", onClick: handleEdit, children: "Edit" }), ' '] })) }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: "Email:" }), (0, jsx_runtime_1.jsx)("td", { children: firstEmail })] }), (0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: 2, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/react/userpostlist", children: "My Post Info list" }) }) })] })] }) })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Body, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Link, { href: "#" }) })] }) }));
};
exports.UserProfile = UserProfile;
