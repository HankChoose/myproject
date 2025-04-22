"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUS = void 0;
const classnames_1 = __importDefault(require("classnames"));
const about_us_module_scss_1 = __importDefault(require("./about-us.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const AboutUS = ({ className }) => {
    return <div className={(0, classnames_1.default)(about_us_module_scss_1.default.root, className)}>
        <div className={(0, classnames_1.default)(about_us_module_scss_1.default.formRowRight)}>
            We are a website dedicated to technical exchange and improvement, aiming to assist developers with common interests in achieving better designs and producing superior products. We encourage enthusiasts to share their development experiences and knowledge to foster a collaborative learning environment.
        </div>
        <div className={(0, classnames_1.default)(about_us_module_scss_1.default.formRowRight)}>
            
        </div>
       

         <div className={(0, classnames_1.default)(about_us_module_scss_1.default.card)}>
            
            <div className={(0, classnames_1.default)(about_us_module_scss_1.default.imagesdiv)}><span className={(0, classnames_1.default)(about_us_module_scss_1.default.people01)}></span></div>
            <div className={(0, classnames_1.default)(about_us_module_scss_1.default.FormRowSmall)}></div>
            <div>Hank (Haiyin) Chen</div>
            <div>Developer</div>
            <div>Email:hankchenv@gmail.com</div>
            <div>Phone:+1 587-936-1806</div>
        </div>

       
    </div>;
};
exports.AboutUS = AboutUS;
