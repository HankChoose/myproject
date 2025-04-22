"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const page_1_1 = require("../../../components/page-1/page-1");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'Page1',
    Board: () => <react_router_dom_1.BrowserRouter><page_1_1.Page1 /> </react_router_dom_1.BrowserRouter>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024
    }
});
