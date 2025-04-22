"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const test_change_pw_1 = require("../../../components/test-change-pw/test-change-pw");
exports.default = (0, react_board_1.createBoard)({
    name: 'TestChangePW',
    Board: () => <test_change_pw_1.TestChangePW />,
    isSnippet: true,
});
