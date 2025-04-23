"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_3_1 = require("../../../components/test-3/test-3");
exports.default = (0, react_board_1.createBoard)({
    name: 'Test3',
    Board: () => (0, jsx_runtime_1.jsx)(test_3_1.Test3, {}),
    isSnippet: true,
});
