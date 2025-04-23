"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class TestClassComponent extends react_1.Component {
    render() {
        const { name, age } = this.props;
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("h1", { children: ["Hello, ", name, "! You are ", age, " years old."] }) }));
    }
}
exports.default = TestClassComponent;
