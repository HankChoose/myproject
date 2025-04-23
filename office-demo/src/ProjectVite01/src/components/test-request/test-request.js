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
exports.TestRequest = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_request_module_scss_1 = __importDefault(require("./test-request.module.scss"));
const apiService_1 = require("../../apiService");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestRequest = ({ className }) => {
    const token = localStorage.getItem('accessToken');
    const handle_fetch_data_token_get = () => __awaiter(void 0, void 0, void 0, function* () {
        // 执行fetch_data_by_token请求
        const apiUrl = '/user-profile/';
        try {
            const data = yield (0, apiService_1.fetch_data_token_get)(apiUrl, token);
            if (data.error) {
                console.log('GET Response data.message:', data.message);
            }
            else {
                console.log('GET Response:', data);
            }
        }
        catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get error:', error);
        }
    });
    const handle_axios_type_data_post_signup = () => __awaiter(void 0, void 0, void 0, function* () {
        // 执行fetch_data_by_token请求
        const apiUrl = '/accounts/signup/';
        const userData = {
            username: 'hankchenvtest0',
            email: 'hankchenvtest0@gmail.com',
            password1: 'chy123hank$A',
            password2: 'chy123hank$A',
            // 添加要发送给Django的数据
        };
        try {
            const data = yield (0, apiService_1.axios_form_data_post)(apiUrl, userData, 'multipart/form-data');
            if (data.error) {
                console.log('GET Response data.message:', data.message);
            }
            else {
                console.log('GET Response:', data);
            }
        }
        catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get error:', error);
        }
    });
    const handle_axios_type_data_post_token = () => __awaiter(void 0, void 0, void 0, function* () {
        // 执行fetch_data_by_token请求
        const apiUrl = '/user-token/';
        const userData = {
            username: 'hankchenvtest0@gmail.com',
            password: 'chy123hank$A',
            // 添加要发送给Django的数据
        };
        try {
            const data = yield (0, apiService_1.axios_json_data_post)(apiUrl, userData);
            if (data.error) {
                console.log('GET Response data.message:', data.message);
            }
            else {
                console.log('GET Response:', data);
            }
        }
        catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get error:', error);
        }
    });
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_request_module_scss_1.default.root, className), children: [(0, jsx_runtime_1.jsx)("button", { onClick: handle_fetch_data_token_get, children: "fetch_data_token_get" }), (0, jsx_runtime_1.jsx)("button", { onClick: handle_axios_type_data_post_signup, children: "axios_type_data_post_signup" }), (0, jsx_runtime_1.jsx)("button", { onClick: handle_axios_type_data_post_token, children: "axios_type_data_post_token" })] });
};
exports.TestRequest = TestRequest;
