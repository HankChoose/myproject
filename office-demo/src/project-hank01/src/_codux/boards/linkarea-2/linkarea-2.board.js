"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const linkarea_2_1 = require("../../../components/linkarea-2/linkarea-2");
exports.default = (0, react_board_1.createBoard)({
    name: 'Linkarea2',
    Board: () => (0, jsx_runtime_1.jsx)(linkarea_2_1.Linkarea2, {}),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 387,
    },
});
