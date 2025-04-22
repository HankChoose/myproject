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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFormikYup = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_formik_yup_module_scss_1 = __importDefault(require("./test-formik-yup.module.scss"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestFormikYup = ({ className }) => {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('无效的邮箱地址').required('必须提供邮箱地址'),
        password: Yup.string()
            .min(6, '密码至少要有6个字符')
            .required('必须提供密码'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], '密码必须匹配')
            .required('必须提供确认密码'),
    });
    const handleSubmit = () => {
        // 在这里处理提交逻辑
        console.log('提交的表单数据：');
    };
    return <div className={(0, classnames_1.default)(test_formik_yup_module_scss_1.default.root, className)}>
        <formik_1.Formik initialValues={{ email: '', password: '', confirmPassword: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <formik_1.Form>
                <div>
                <label htmlFor="email">电子邮件：</label>
                <formik_1.Field type="text" id="email" name="email"/>
                <formik_1.ErrorMessage name="email" component="div" className="error"/>
                </div>
                
                <div>
                    <label htmlFor="password">密码</label>
                    <formik_1.Field type="password" name="password"/>
                    <formik_1.ErrorMessage name="password" component="div"/>
                </div>

                <div>
                    <label htmlFor="confirmPassword">确认密码：</label>
                    <formik_1.Field type="password" id="confirmPassword" name="confirmPassword"/>
                    <formik_1.ErrorMessage name="confirmPassword" component="div"/>
                </div>

                <button type="submit">提交</button>
            </formik_1.Form>
        </formik_1.Formik>
    
    </div>;
};
exports.TestFormikYup = TestFormikYup;
