"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const user_apply_area_1 = require("../../../components/user-apply-area/user-apply-area");
exports.default = (0, react_board_1.createBoard)({
    name: 'UserApplyArea',
    Board: () => (0, jsx_runtime_1.jsx)(user_apply_area_1.UserApplyArea, {}),
    isSnippet: true,
});
