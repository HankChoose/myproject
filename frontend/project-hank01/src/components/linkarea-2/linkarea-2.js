"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkarea2 = void 0;
const classnames_1 = __importDefault(require("classnames"));
const linkarea_2_module_scss_1 = __importDefault(require("./linkarea-2.module.scss"));
const form_card_1 = require("../form-card/form-card");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Linkarea2 = ({ className }) => {
    return (<div className={(0, classnames_1.default)(linkarea_2_module_scss_1.default.root, className)}>
            <react_router_dom_1.BrowserRouter>
                <div>
                    <react_router_dom_1.Link to="/*">Sign In</react_router_dom_1.Link>
                    <react_router_dom_1.Link to="/signup">Sign Up</react_router_dom_1.Link>
                    <react_router_dom_1.Link to="/resetpw">Reset password</react_router_dom_1.Link>
                    <react_router_dom_1.Routes>
                        <react_router_dom_1.Route path="/*" element={<form_card_1.FormCard formType="signin"/>}/>
                        <react_router_dom_1.Route path="/signup" element={<form_card_1.FormCard formType="signup"/>}/>
                        <react_router_dom_1.Route index element={<form_card_1.FormCard formType="signin"/>}/>
                    </react_router_dom_1.Routes>
                </div>
            </react_router_dom_1.BrowserRouter>
        </div>);
};
exports.Linkarea2 = Linkarea2;
