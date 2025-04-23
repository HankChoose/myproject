"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_st_css_1 = require("./app.st.css");
const form_card_1 = require("./components/form-card/form-card");
const react_router_dom_1 = require("react-router-dom");
const App = ({ className }) => {
    return ((0, jsx_runtime_1.jsx)("main", { className: (0, app_st_css_1.st)(app_st_css_1.classes.root, className), children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/*", children: "Sign In" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signup", children: "Sign Up" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/resetpw", children: "Reset password" }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/*", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signin" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signup" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(form_card_1.FormCard, { formType: "signin" }) })] })] }) }) }));
};
exports.App = App;
