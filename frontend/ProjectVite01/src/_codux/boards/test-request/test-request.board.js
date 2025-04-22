"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_request_1 = require("../../../components/test-request/test-request");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestRequest',
    Board: () => <test_request_1.TestRequest />,
    isSnippet: true,
});
