"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const about_us_1 = require("../../../components/about-us/about-us");
exports.default = (0, react_board_1.createBoard)({
    name: 'AboutUS',
    Board: () => (0, jsx_runtime_1.jsx)(about_us_1.AboutUS, {}),
    isSnippet: true,
});
