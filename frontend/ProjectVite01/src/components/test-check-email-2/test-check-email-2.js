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
exports.TestCheckEmail2 = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_check_email_2_module_scss_1 = __importDefault(require("./test-check-email-2.module.scss"));
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestCheckEmail2 = ({ className }) => {
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('无效的邮件地址').required('必填项'),
        }),
        onSubmit: (values) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.post('/api/check_user/', { email: values.email });
                if (response.data.exists) {
                    alert('用户已存在！');
                }
                else {
                    // 继续处理注册逻辑，可以使用 Axios 发送数据到注册接口
                }
            }
            catch (error) {
                console.error('Error checking user:', error);
            }
        }),
    });
    return <div className={(0, classnames_1.default)(test_check_email_2_module_scss_1.default.root, className)}>
    <div className={(0, classnames_1.default)(test_check_email_2_module_scss_1.default.FormRow)}> <a href={constants_1.baseUrl}>Home</a></div>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">邮箱地址:</label>
            <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

            <button type="submit">提交</button>
            </form>
    
    </div>;
};
exports.TestCheckEmail2 = TestCheckEmail2;
