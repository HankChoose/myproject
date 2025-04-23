"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const header_1 = require("../../../header");
exports.default = (0, react_board_1.createBoard)({
    name: 'Header',
    Board: () => (0, jsx_runtime_1.jsx)(header_1.Header, {})
});
