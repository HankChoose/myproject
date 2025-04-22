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
exports.UserApply3 = void 0;
const classnames_1 = __importDefault(require("classnames"));
const user_apply_3_module_scss_1 = __importDefault(require("./user-apply-3.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const react_1 = __importDefault(require("react"));
//import DOMPurify from 'dompurify';
const react_redux_1 = require("react-redux");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const js_cookie_1 = __importDefault(require("js-cookie"));
const constants_1 = require("../../constants");
const Table_1 = __importDefault(require("react-bootstrap/Table"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const UserApply3 = ({ className }) => {
    const userInfo = (0, react_redux_1.useSelector)((state) => state.userInfo);
    const userInfo2 = (0, react_redux_1.useSelector)((state) => state.userInfo2);
    //for map
    const { uploadedImages } = userInfo2;
    console.log('userInfo-1:', userInfo);
    console.log('userInfo2-1:', userInfo2);
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)(); // 在<Router>组件内使用useNavigate
    const handleSubmission = () => __awaiter(void 0, void 0, void 0, function* () {
        const csrfToken = js_cookie_1.default.get('csrftoken'); // 获取 CSRF token
        console.log('userInfo:', userInfo);
        console.log('userInfo2:', userInfo2);
        const formData = new FormData();
        // 添加普通字段
        formData.append('username', userInfo.name);
        formData.append('email', userInfo.email);
        formData.append('applytype', userInfo2.applytype);
        formData.append('requirements', userInfo2.requirements);
        // 添加文件字段
        userInfo2.uploadedImages.forEach((uploadedImage, index) => {
            // If there is a file, append it to FormData
            if (uploadedImage.file) {
                formData.append(`uploadedImages[${index}]`, uploadedImage.file);
                console.log('uploadedImage.file', uploadedImage.file);
                //const blob = new Blob([uploadedImage.file], { type: uploadedImage.file.type });
                //formData.append(`uploadedImages[${index}]`, blob, uploadedImage.fileName);
            }
        });
        // 添加其他字段
        formData.append('mainImageId', userInfo2.mainImageId.toString());
        // Logging the FormData entries
        formData.forEach((value, key) => {
            console.log('formData[' + key + ']', value);
        });
        // 发送请求
        axios_1.default.post(`${constants_1.baseUrl}/upload-user-apply/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
            }
        })
            .then((response) => {
            console.log(response.data);
            navigate('/react/testlisdatatable');
        })
            .catch((error) => {
            console.error('Error uploading data:', error);
        });
    });
    /*
    const sanitizeAndPreserveNewlines = (htmlString: string) => {
        // Sanitize the HTML content using DOMPurify
        const sanitizedContent = DOMPurify.sanitize(htmlString, {
            ALLOWED_TAGS: ['input', 'section', 'option'],
            ALLOWED_ATTR: ['value'],
        });

        // Preserve \n characters
        const preservedNewlines = sanitizedContent.replace(/\n/g, '<br>');

        return preservedNewlines;
    };
    
    const formattedRequirements = sanitizeAndPreserveNewlines(userInfo2.requirements);
    */
    return (<div className={(0, classnames_1.default)(user_apply_3_module_scss_1.default.root, className)}>
            <div className={(0, classnames_1.default)(user_apply_3_module_scss_1.default.flowImage3)}></div>
            <div className={user_apply_3_module_scss_1.default.FromArea}>
                <Table_1.default bordered>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{userInfo.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{userInfo.email}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{userInfo2.applytype}</td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>
                                <div style={{ whiteSpace: 'pre-line' }}>
                                    {userInfo2.requirements}
                                </div>
                            </td>
                        </tr>

                         <tr>
                            <td>Image Files</td>
                            <td> 
                                {uploadedImages.map((image, index) => (<div key={index}>
                                        <p>File Name: {image.fileName}</p>
                                    </div>))}
                            </td>
                        </tr>
                    </tbody>
                </Table_1.default>
                <div className={(0, classnames_1.default)(user_apply_3_module_scss_1.default.FormRow)}> </div>
                <div className={(0, classnames_1.default)(user_apply_3_module_scss_1.default.FormRow)}>
                    <react_router_dom_1.Link to="/react/userapply2">
                        <Button_1.default variant="primary">Previous page</Button_1.default>
                    </react_router_dom_1.Link>
                    <Button_1.default variant="primary" onClick={handleSubmission}>
                        Submit
                    </Button_1.default>
                </div>
            </div>
        </div>);
};
exports.UserApply3 = UserApply3;
