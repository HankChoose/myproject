"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const linkarea_1 = require("../../../components/linkarea/linkarea");
exports.default = (0, react_board_1.createBoard)({
    name: 'Linkarea',
    Board: () => <linkarea_1.Linkarea />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 532,
    },
});
