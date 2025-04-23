"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const label_1 = require("../../../components/label/label");
exports.default = (0, react_board_1.createBoard)({
    name: 'Label',
    Board: () => (0, jsx_runtime_1.jsx)(label_1.Label, { children: "My Label" }),
    isSnippet: true,
});
