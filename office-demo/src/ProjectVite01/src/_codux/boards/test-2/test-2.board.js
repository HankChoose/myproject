"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_2_1 = require("../../../components/test-2/test-2");
exports.default = (0, react_board_1.createBoard)({
    name: 'Test2',
    Board: () => (0, jsx_runtime_1.jsx)(test_2_1.Test2, {}),
    isSnippet: true,
});
