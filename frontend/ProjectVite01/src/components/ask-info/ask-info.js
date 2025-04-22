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
exports.AskInfo = void 0;
const classnames_1 = __importDefault(require("classnames"));
const ask_info_module_scss_1 = __importDefault(require("./ask-info.module.scss"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const apiService_1 = require("../../apiService");
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    phone: Yup.string()
        .nullable()
        .matches(/^[0-9-]+$/, 'Invalid phone number')
        .min(5, 'Phone number must be at least 5 characters')
        .max(20, 'Phone number must be 20 characters or less'),
    username: Yup.string()
        .matches(/^[^\s-]+$/, 'Username cannot contain spaces or -')
        .max(30, 'Username must be 30 characters or less')
        .required('Username is required'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be 1000 characters or less')
        .required('Message is required'),
});
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const AskInfo = ({ className }) => {
    const [userData, setUserData] = (0, react_1.useState)([]);
    const token = localStorage.getItem('accessToken');
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        // 在组件挂载后，通过引用获取 textarea 的值
        fetchData();
    }, []); // 注意：这里的空数组表示仅在组件挂载时执行
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            email: '',
            phone: '',
            username: '',
            message: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleAskInfo(values);
        },
    });
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
            // 更新 Formik 的 initialValues
            console.log('data[0].email', data[0].email);
            console.log('data[0].username', data[0].username);
            formik.setValues(Object.assign(Object.assign({}, formik.values), { email: data[0].email || '', username: data[0].username || '', phone: '', message: '' }));
        }
        catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    });
    //------------------------------------------------------->handleAskInfo
    const handleAskInfo = (values) => __awaiter(void 0, void 0, void 0, function* () {
        // Logic for handling sign-up form submission
        const apiUrl = `/user-ask-info/`;
        // Split the email address at the "@" symbol
        //const parts = values.email.split('@');
        const userData = {
            username: values.username,
            email: values.email,
            phone: values.phone,
            message: values.message,
            // 添加要发送给Django的数据
        };
        try {
            const data = yield (0, apiService_1.axios_form_data_post)(apiUrl, userData, 'multipart/form-data');
            if (data.error) {
                console.log('GET Response AskInfo failed data.message:', data.message);
            }
            else {
                console.log('GET Response AskInfo OK:', data);
                navigate("/react/afteraskinfo");
            }
        }
        catch (error) {
            // 处理错误
            console.error('handleAskInfo error:', error);
        }
    });
    const firstusername = userData.length > 0 ? userData[0].username : undefined;
    const firstEmail = userData.length > 0 ? userData[0].email : undefined;
    //const firstusername = "zzz";
    //const firstEmail = "eee";
    return (<div>
            <div className={ask_info_module_scss_1.default.FromArea}>
                <form onSubmit={formik.handleSubmit}>
                  
                    <div className={(0, classnames_1.default)(ask_info_module_scss_1.default.FormRowSmall)}> </div>
                    <div>
                        <div>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username || firstusername || ''} className={(0, classnames_1.default)(ask_info_module_scss_1.default.Input)}/>

                        </div>
                        <div className={(0, classnames_1.default)(ask_info_module_scss_1.default.FormRow)}>
                            {formik.touched.username && formik.errors.username ? (<div className={(0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea)}>
                                    {formik.errors.username}
                                </div>) : null}
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            <input type="text" id="email" name="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email || firstEmail || ''} className={(0, classnames_1.default)(ask_info_module_scss_1.default.Input)}/>
                           
                        </div>
                        <div className={(0, classnames_1.default)(ask_info_module_scss_1.default.FormRow)}>
                            {formik.touched.email && formik.errors.email ? (<div className={(0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea)}>
                                    {formik.errors.email}
                                </div>) : null}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input type="text" id="phone" name="phone" placeholder="Phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className={(0, classnames_1.default)(ask_info_module_scss_1.default.Input)}/>
                        </div>
                        <div className={(0, classnames_1.default)(ask_info_module_scss_1.default.FormRow)}>
                            {formik.touched.phone && formik.errors.phone ? (<div className={(0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea)}>
                                    {formik.errors.phone}
                                </div>) : null}
                        </div>
                    </div>

                    <div>
                        <div>
                            <textarea id="message" name="message" rows={4} cols={38} onChange={formik.handleChange} onBlur={(e) => {
            formik.handleBlur(e);
            formik.handleChange(e); // 触发 onChange 事件
        }} placeholder="Enter text here"> 
                            </textarea>
 
                        </div>
                        <div className={(0, classnames_1.default)(ask_info_module_scss_1.default.FormRow)}>
                            {formik.touched.message && formik.errors.message ? (<div className={(0, classnames_1.default)(ask_info_module_scss_1.default.ErrorsArea)}>
                                    {formik.errors.message}
                                </div>) : null}
                        </div>
                    </div>

                    <div>
                        <button type="submit" className={ask_info_module_scss_1.default.ButtonSubmit}>
                           Submit
                        </button>
                    </div>

                    <div> </div>
                </form>
            </div>
        </div>);
};
exports.AskInfo = AskInfo;
