"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const page_2_1 = require("../../../components/page-2/page-2");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'Page2',
    Board: () => <react_router_dom_1.BrowserRouter><page_2_1.Page2 /></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 36,
        canvasWidth: 40
    }
});
