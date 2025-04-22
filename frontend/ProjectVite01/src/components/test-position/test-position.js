"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPosition = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_position_module_scss_1 = __importDefault(require("./test-position.module.scss"));
const sign_card_1 = require("../sign-card/sign-card");
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestPosition = ({ className }) => {
    return <div className={(0, classnames_1.default)(test_position_module_scss_1.default.root, className)}>
        Root
        <div className={test_position_module_scss_1.default.top}>
            AppTop
        </div>
        <div className={test_position_module_scss_1.default.content}>
            App

            <react_router_dom_1.BrowserRouter> <sign_card_1.SignCard /></react_router_dom_1.BrowserRouter>
        </div>

    </div>;
};
exports.TestPosition = TestPosition;
