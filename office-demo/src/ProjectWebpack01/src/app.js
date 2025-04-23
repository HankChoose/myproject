"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const app_st_css_1 = require("./app.st.css");
const header_1 = require("./header");
const App = ({ className }) => {
    return ((0, jsx_runtime_1.jsx)("main", { className: (0, app_st_css_1.st)(app_st_css_1.classes.root, className), children: (0, jsx_runtime_1.jsx)(header_1.Header, { className: app_st_css_1.classes.header }) }));
};
exports.App = App;
