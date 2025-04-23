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
exports.TestListDataTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_list_data_table_module_scss_1 = __importDefault(require("./test-list-data-table.module.scss"));
const react_1 = require("react");
const test_data_table_1 = require("../test-data-table/test-data-table");
const apiService_1 = require("../../apiService");
const test_data_grid_1 = require("../test-data-grid/test-data-grid");
const bi_1 = require("react-icons/bi");
const fa_1 = require("react-icons/fa");
const sampleData = [
    {
        id: '1',
        apply_type: 'apply_type 1',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank1',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    {
        id: '2',
        apply_type: 'apply_type 2',
        requirements: 'Description 1Description 1Description 1Description 1Description 1Description 1',
        username: 'hank2',
        email: 'hank1@example.com',
        image_path_main: 'apply_type 1',
        apply_time: new Date('2024-01-09'), // Convert the date string to Date object
        comment: 'apply_type 1',
        comment2: 'apply_type 1'
    },
    // ... other data objects
];
const TestListDataTable = ({ className }) => {
    const [data1, setData] = (0, react_1.useState)([]);
    const [viewMode, setViewMode] = (0, react_1.useState)('list'); // 初始视图模式为列表
    const toggleViewMode = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'));
    };
    (0, react_1.useEffect)(() => {
        fetchData();
    }, []);
    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-apply-mian-list/`;
        try {
            const data = yield (0, apiService_1.fetch_data_csrf_get)(apiUrl);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            }
            else {
                console.log('fetchData response:', data);
            }
            setData(data);
        }
        catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    });
    return (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_list_data_table_module_scss_1.default.root), children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { className: test_list_data_table_module_scss_1.default.buttonStyle, onClick: toggleViewMode, children: viewMode === 'list' ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(bi_1.BiSolidGrid, {}), " Grid View"] }) : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaListUl, {}), " List View"] }) }), viewMode === 'list' ? (0, jsx_runtime_1.jsx)(test_data_table_1.TestDataTable, { data: data1 }) : (0, jsx_runtime_1.jsx)(test_data_grid_1.TestDataGrid, { data: data1 })] }) });
};
exports.TestListDataTable = TestListDataTable;
