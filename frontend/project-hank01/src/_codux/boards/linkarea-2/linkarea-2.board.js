"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const linkarea_2_1 = require("../../../components/linkarea-2/linkarea-2");
exports.default = (0, react_board_1.createBoard)({
    name: 'Linkarea2',
    Board: () => <linkarea_2_1.Linkarea2 />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 387,
    },
});
