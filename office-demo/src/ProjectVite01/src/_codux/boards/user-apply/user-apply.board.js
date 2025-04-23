"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_board_1 = require("@wixc3/react-board");
const user_apply_1 = require("../../../components/user-apply/user-apply");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const rootReducer_1 = __importDefault(require("../../../reducers/rootReducer")); // 导入根 reducer
const AuthContext_1 = require("../../../AuthContext");
const store = (0, redux_1.createStore)(rootReducer_1.default); // 创建 Redux store
exports.default = (0, react_board_1.createBoard)({
    name: 'UserApply',
    Board: () => (0, jsx_runtime_1.jsx)(AuthContext_1.AuthProvider, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(user_apply_1.UserApply, {}) }) }) }),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 946,
        windowWidth: 1318,
        canvasWidth: 768,
        windowHeight: 504
    }
});
