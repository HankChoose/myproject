"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const link_1 = require("../../../components/link/link");
exports.default = (0, react_board_1.createBoard)({
    name: 'Link',
    Board: () => (0, jsx_runtime_1.jsx)(link_1.Link, {}),
    isSnippet: true,
});
