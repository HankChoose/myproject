"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_check_email_1 = require("../../../components/test-check-email/test-check-email");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestCheckEmail',
    Board: () => <test_check_email_1.TestCheckEmail />,
    isSnippet: true,
});
