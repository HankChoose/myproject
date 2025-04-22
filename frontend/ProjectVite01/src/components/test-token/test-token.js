"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestToken = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_token_module_scss_1 = __importDefault(require("./test-token.module.scss"));
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestToken = ({ className }) => {
    const token = localStorage.getItem('accessToken');
    console.log('Token=', token);
    return <div className={(0, classnames_1.default)(test_token_module_scss_1.default.root, className)}>
         <div>
        {token ? (<div>
            <p>Welcome, {token}</p>
          
            </div>) : (<p>No token.</p>)}
        </div>
    
    
    </div>;
};
exports.TestToken = TestToken;
