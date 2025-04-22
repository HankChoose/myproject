"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_check_email_2_1 = require("../../../components/test-check-email-2/test-check-email-2");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestCheckEmail2',
    Board: () => <test_check_email_2_1.TestCheckEmail2 />,
    isSnippet: true,
});
