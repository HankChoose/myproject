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
exports.TestList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_list_module_scss_1 = __importDefault(require("./test-list.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const constants_1 = require("../../constants");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestList = ({ className }) => {
    const [data, setData] = (0, react_1.useState)([]);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [sortedField, setSortedField] = (0, react_1.useState)(null);
    const [selectedItems, setSelectedItems] = (0, react_1.useState)([]);
    const [page, setPage] = (0, react_1.useState)(1);
    const [pageSize, setPageSize] = (0, react_1.useState)(10);
    const [sortOrder, setSortOrder] = (0, react_1.useState)('asc'); // 'asc' or 'desc'
    (0, react_1.useEffect)(() => {
        fetchData();
    }, [page, pageSize, sortOrder]);
    // Filtering logic
    const filteredData = data.filter(item => item.username.toLowerCase().includes(searchTerm.toLowerCase()));
    // Sorting logic
    const sortedData = sortedField
        ? [...filteredData].sort((a, b) => {
            const order = sortOrder === 'asc' ? 1 : -1;
            return a[sortedField] > b[sortedField] ? order : -order;
        })
        : filteredData;
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };
    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setPage(1); // Reset to the first page when changing page size
    };
    const handleSortChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
    };
    const handleCheckboxChange = (id) => {
        const selected = selectedItems.includes(id);
        if (selected) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        }
        else {
            setSelectedItems([...selectedItems, id]);
        }
    };
    const handleDelete = () => {
        const updatedData = data.filter(item => !selectedItems.includes(Number(item.id)));
        setData(updatedData);
        setSelectedItems([]);
    };
    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('accessToken');
        const apiUrl = `${constants_1.baseUrl}/user-demand-list/`;
        if (token) {
            try {
                const response = yield fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`, // 注意这里的格式，应为 `Token ${token}`
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = yield response.json();
                    console.log('data', data);
                    setData(data);
                }
                else {
                    // 处理请求失败的情况
                    console.error('Failed to fetch user data:', response.status, response.statusText);
                }
            }
            catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        else {
            // 处理令牌不存在的情况
            console.error('Access token is undefined or null.');
        }
    });
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_list_module_scss_1.default.root), children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search...", value: searchTerm, onChange: e => {
                    setSearchTerm(e.target.value);
                    console.log("Search Term:", e.target.value);
                } }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_list_module_scss_1.default.formRowRight), children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", {}), (0, jsx_runtime_1.jsxs)("select", { onChange: (e) => handlePageSizeChange(Number(e.target.value)), value: pageSize, children: [(0, jsx_runtime_1.jsx)("option", { value: "5", children: "5" }), (0, jsx_runtime_1.jsx)("option", { value: "10", children: "10" }), (0, jsx_runtime_1.jsx)("option", { value: "20", children: "20" })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", {}), (0, jsx_runtime_1.jsxs)("select", { onChange: (e) => handleSortChange(e.target.value), value: sortOrder, children: [(0, jsx_runtime_1.jsx)("option", { value: "asc", children: "Ascending" }), (0, jsx_runtime_1.jsx)("option", { value: "desc", children: "Descending" })] })] })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Table, { striped: true, bordered: true, hover: true, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", {}), (0, jsx_runtime_1.jsx)("th", { children: "ID" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Username" }), (0, jsx_runtime_1.jsx)("th", { children: "Email" }), (0, jsx_runtime_1.jsx)("th", {})] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map((item) => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: selectedItems.includes(Number(item.id)), onChange: () => handleCheckboxChange(Number(item.id)) }) }), (0, jsx_runtime_1.jsx)("td", { children: item.id }), (0, jsx_runtime_1.jsx)("td", { children: item.demand_type }), (0, jsx_runtime_1.jsx)("td", { children: item.demand_description }), (0, jsx_runtime_1.jsx)("td", { children: item.username }), (0, jsx_runtime_1.jsx)("td", { children: item.email }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("a", { href: `userapplycontent/${item.id}`, target: "_blank", rel: "noopener noreferrer", children: "Open" }) })] }, item.id))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_list_module_scss_1.default.formRowSeparate), children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => handlePageChange(page - 1), disabled: page === 1, children: "Previous" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handlePageChange(page + 1), children: "Next" })] })] });
};
exports.TestList = TestList;
