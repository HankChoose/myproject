"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_board_1 = require("@wixc3/react-board");
const user_apply_3_1 = require("../../../components/user-apply-3/user-apply-3");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const rootReducer_1 = __importDefault(require("../../../reducers/rootReducer")); // 导入根 reducer
const store = (0, redux_1.createStore)(rootReducer_1.default); // 创建 Redux store
exports.default = (0, react_board_1.createBoard)({
    name: 'UserApply3',
    Board: () => <react_redux_1.Provider store={store}>
    <react_router_dom_1.BrowserRouter>
        <user_apply_3_1.UserApply3 />
    </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>,
    isSnippet: true,
});
