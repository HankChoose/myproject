"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const form_card_1 = require("../../../components/form-card/form-card");
const react_router_dom_1 = require("react-router-dom");
exports.default = (0, react_board_1.createBoard)({
    name: 'Resetpw',
    Board: () => <react_router_dom_1.BrowserRouter><form_card_1.FormCard formType="resetpw"/></react_router_dom_1.BrowserRouter>,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 370
    }
});
