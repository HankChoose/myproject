"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const inputpw_1 = require("../../../components/inputpw/inputpw");
exports.default = (0, react_board_1.createBoard)({
    name: 'Inputpw',
    Board: () => (0, jsx_runtime_1.jsx)(inputpw_1.Inputpw, {}),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 66,
        windowWidth: 1024,
        windowHeight: 489,
    },
});
