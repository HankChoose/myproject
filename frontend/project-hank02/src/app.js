"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const app_st_css_1 = require("./app.st.css");
const form_card_1 = require("./components/form-card/form-card");
const react_router_dom_1 = require("react-router-dom");
const App = ({ className }) => {
    return (<main className={(0, app_st_css_1.st)(app_st_css_1.classes.root, className)}>
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
        </main>);
};
exports.App = App;
