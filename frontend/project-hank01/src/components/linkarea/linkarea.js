"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkarea = void 0;
const classnames_1 = __importDefault(require("classnames"));
const linkarea_module_scss_1 = __importDefault(require("./linkarea.module.scss"));
const form_card_1 = require("../../components/form-card/form-card");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Linkarea = ({ className }) => {
    return (<div className={(0, classnames_1.default)(linkarea_module_scss_1.default.root, className)}>
            <react_router_dom_1.BrowserRouter>
                <div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <react_router_dom_1.Link to="/*" className="nav-link active" data-toggle="tab">
                                        Sign In
                                    </react_router_dom_1.Link>
                                </li>
                                <li className="nav-item">
                                    <react_router_dom_1.Link to="/signup" className="nav-link" data-toggle="tab">
                                        Sign Up
                                    </react_router_dom_1.Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-home-tab"></div>
                        <div className="tab-pane fade" role="tabpanel" aria-labelledby="nav-profile-tab"></div>
                    </div>
                    <react_router_dom_1.Routes>
                        <react_router_dom_1.Route path="/*" element={<form_card_1.FormCard formType="signin"/>}/>
                        <react_router_dom_1.Route path="/signup" element={<form_card_1.FormCard formType="signup"/>}/>
                        <react_router_dom_1.Route index element={<form_card_1.FormCard formType="signin"/>}/>
                    </react_router_dom_1.Routes>
                </div>
            </react_router_dom_1.BrowserRouter>
        </div>);
};
exports.Linkarea = Linkarea;
