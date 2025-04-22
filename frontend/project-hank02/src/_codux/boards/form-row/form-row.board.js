"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const form_row_1 = require("../../../components/form-row/form-row");
exports.default = (0, react_board_1.createBoard)({
    name: 'FormRow',
    Board: () => <form_row_1.FormRow />,
    isSnippet: true,
});
