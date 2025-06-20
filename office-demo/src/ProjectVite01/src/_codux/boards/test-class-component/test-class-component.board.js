"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_class_component_1 = __importDefault(require("../../../components/test-class-component/test-class-component"));
exports.default = (0, react_board_1.createBoard)({
    name: 'TestClassComponent',
    Board: () => (0, jsx_runtime_1.jsx)(test_class_component_1.default, { name: "John", age: 30 }),
    isSnippet: true,
});
