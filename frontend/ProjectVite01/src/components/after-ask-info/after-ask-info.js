"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterAskInfo = void 0;
const classnames_1 = __importDefault(require("classnames"));
const after_ask_info_module_scss_1 = __importDefault(require("./after-ask-info.module.scss"));
const react_bootstrap_1 = require("react-bootstrap");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const AfterAskInfo = ({ className }) => {
    const aferaskinfo = "The message has been sent successfully, return to ";
    return <div className={(0, classnames_1.default)(after_ask_info_module_scss_1.default.root, className)}>
             <div className={(0, classnames_1.default)(after_ask_info_module_scss_1.default.FormRow)}></div>
            <react_bootstrap_1.Card style={{ width: '60vw' }}>
                <react_bootstrap_1.Card.Body>
                    <react_bootstrap_1.Card.Title>
                        <h2>Message has been sent</h2>
                    </react_bootstrap_1.Card.Title>
                    <react_bootstrap_1.Card.Text></react_bootstrap_1.Card.Text>
                </react_bootstrap_1.Card.Body>
                
                <react_bootstrap_1.Card.Body>
                    {aferaskinfo}<a href="https://zhiyouyuec.com">Home</a>
                </react_bootstrap_1.Card.Body>
            </react_bootstrap_1.Card>
        </div>;
};
exports.AfterAskInfo = AfterAskInfo;
