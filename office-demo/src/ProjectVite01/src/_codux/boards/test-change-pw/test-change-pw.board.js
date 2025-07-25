"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_change_pw_1 = require("../../../components/test-change-pw/test-change-pw");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestChangePW',
    Board: () => (0, jsx_runtime_1.jsx)(test_change_pw_1.TestChangePW, {}),
    isSnippet: true,
});
