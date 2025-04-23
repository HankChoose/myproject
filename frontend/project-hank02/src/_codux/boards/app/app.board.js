"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const app_1 = require("../../../app");
exports.default = (0, react_board_1.createBoard)({
    name: 'App',
    Board: () => (0, jsx_runtime_1.jsx)(app_1.App, {}),
});
