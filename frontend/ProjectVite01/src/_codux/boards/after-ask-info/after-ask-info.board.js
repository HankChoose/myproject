"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const after_ask_info_1 = require("../../../components/after-ask-info/after-ask-info");
exports.default = (0, react_board_1.createBoard)({
    name: 'AfterAskInfo',
    Board: () => <after_ask_info_1.AfterAskInfo />,
    isSnippet: true,
});
