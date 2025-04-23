"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_position_1 = require("../../../components/test-position/test-position");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestPosition',
    Board: () => (0, jsx_runtime_1.jsx)(test_position_1.TestPosition, {}),
    isSnippet: true,
    environmentProps: {
        windowHeight: 587
    }
});
