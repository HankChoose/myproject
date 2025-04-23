"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const user_apply_2_1 = require("../../../components/user-apply-2/user-apply-2");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const rootReducer_1 = __importDefault(require("../../../reducers/rootReducer")); // 导入根 reducer
const store = (0, redux_1.createStore)(rootReducer_1.default); // 创建 Redux store
exports.default = (0, react_board_1.createBoard)({
    name: 'UserApply2',
    Board: () => (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(user_apply_2_1.UserApply2, {}) }) }),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 514
    }
});
