"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPostList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const user_post_list_module_scss_1 = __importDefault(require("./user-post-list.module.scss"));
const react_1 = require("react");
const test_data_table_1 = require("../test-data-table/test-data-table");
const apiService_1 = require("../../apiService");
const test_data_grid_1 = require("../test-data-grid/test-data-grid");
const bi_1 = require("react-icons/bi");
const fa_1 = require("react-icons/fa");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const UserPostList = ({ className }) => {
    const [data1, setData] = (0, react_1.useState)([]);
    const [viewMode, setViewMode] = (0, react_1.useState)('list'); // 初始视图模式为列表
    const toggleViewMode = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'));
    };
    const token = localStorage.getItem('accessToken');
    (0, react_1.useEffect)(() => {
        fetchDataList();
    }, []);
    const fetchDataList = () => __awaiter(void 0, void 0, void 0, function* () {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-apply-user-list/`;
        try {
            const data = yield (0, apiService_1.fetch_data_token_get)(apiUrl, token);
            if (data.error) {
                console.log('fetchDataList response data.message:', data.message);
            }
            else {
                console.log('fetchDataList response:', data);
            }
            setData(data);
        }
        catch (error) {
            // 处理错误
            console.error('fetchDataList error:', error);
        }
    });
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(user_post_list_module_scss_1.default.root), children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { className: user_post_list_module_scss_1.default.buttonStyle, onClick: toggleViewMode, children: viewMode === 'list' ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(bi_1.BiSolidGrid, {}), " Grid View"] }) : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaListUl, {}), " List View"] }) }), viewMode === 'list' ? (0, jsx_runtime_1.jsx)(test_data_table_1.TestDataTable, { data: data1 }) : (0, jsx_runtime_1.jsx)(test_data_grid_1.TestDataGrid, { data: data1 })] }) });
};
exports.UserPostList = UserPostList;
