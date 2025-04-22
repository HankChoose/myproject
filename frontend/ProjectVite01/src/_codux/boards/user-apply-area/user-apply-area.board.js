"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const user_apply_area_1 = require("../../../components/user-apply-area/user-apply-area");
exports.default = (0, react_board_1.createBoard)({
    name: 'UserApplyArea',
    Board: () => <user_apply_area_1.UserApplyArea />,
    isSnippet: true,
});
