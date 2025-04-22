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
exports.UserProfile = void 0;
const classnames_1 = __importDefault(require("classnames"));
const user_profile_module_scss_1 = __importDefault(require("./user-profile.module.scss"));
const react_1 = __importStar(require("react"));
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
    return (<div>
            <react_bootstrap_1.Card style={{ width: '60vw' }}>
                <react_bootstrap_1.Card.Body>
                    <react_bootstrap_1.Card.Title>
                        <h1>User Home</h1>
                    </react_bootstrap_1.Card.Title>
                    <react_bootstrap_1.Card.Text></react_bootstrap_1.Card.Text>
                </react_bootstrap_1.Card.Body>
                <react_bootstrap_1.ListGroup className="list-group-flush">
                    <react_bootstrap_1.ListGroup.Item>
                        <h3>Welcome! {firstusername}</h3>
                    </react_bootstrap_1.ListGroup.Item>

                    <react_bootstrap_1.ListGroup.Item>
                        <react_bootstrap_1.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ width: '150px' }}>Item</th>
                                    <th>Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Username:</td>
                                    <td>
                                        <div>
                                            {editing ? (<div className={(0, classnames_1.default)(user_profile_module_scss_1.default.FormRow)}>
                                                    <input type="text" value={username} className={(0, classnames_1.default)(user_profile_module_scss_1.default.Input)} placeholder={firstusername} onChange={(e) => setUsername(e.target.value)}/>
                                                    <react_bootstrap_1.Button variant="primary" size="sm" onClick={handleSave}>
                                                        Save
                                                    </react_bootstrap_1.Button>{' '}
                                                    <react_bootstrap_1.Button variant="primary" size="sm" onClick={handleCancel}>
                                                        Cancel
                                                    </react_bootstrap_1.Button>{' '}
                                                </div>) : (<div className={(0, classnames_1.default)(user_profile_module_scss_1.default.FormRow)}>
                                                    <span>{firstusername}</span>
                                                    <react_bootstrap_1.Button variant="primary" size="sm" onClick={handleEdit}>
                                                        Edit
                                                    </react_bootstrap_1.Button>{' '}
                                                </div>)}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{firstEmail}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        
                                         <react_router_dom_1.Link to="/react/userpostlist">My Post Info list</react_router_dom_1.Link>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </react_bootstrap_1.Table>
                    </react_bootstrap_1.ListGroup.Item>
                </react_bootstrap_1.ListGroup>
                <react_bootstrap_1.Card.Body>
                    <react_bootstrap_1.Card.Link href="#"></react_bootstrap_1.Card.Link>
                </react_bootstrap_1.Card.Body>
            </react_bootstrap_1.Card>
        </div>);
};
exports.UserProfile = UserProfile;
