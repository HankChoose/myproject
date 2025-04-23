"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const test_request_1 = require("../../../components/test-request/test-request");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestRequest',
    Board: () => (0, jsx_runtime_1.jsx)(test_request_1.TestRequest, {}),
    isSnippet: true,
});
