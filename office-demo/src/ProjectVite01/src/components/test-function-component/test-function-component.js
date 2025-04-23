"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFunctionComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TestFunctionComponent = (props) => {
    const { name, age } = props;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("h1", { children: ["Hello, ", name, "! You are ", age, " years old."] }) }));
};
exports.TestFunctionComponent = TestFunctionComponent;
