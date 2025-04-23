"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const test_data_grid_module_scss_1 = __importDefault(require("./test-data-grid.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const test_get_images_1 = require("../test-get-images/test-get-images");
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const TestDataGrid = ({ className, data }) => {
    // 状态管理
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const [page, setPage] = (0, react_1.useState)(1);
    const [pageSize, setPageSize] = (0, react_1.useState)(5); // 每页显示的数据量
    const [sortOrder, setSortOrder] = (0, react_1.useState)('desc'); // 'asc' 或 'desc'
    const [sortedField, setSortedField] = (0, react_1.useState)('id'); // 按照哪个字段排序
    const [imageData, setImageData] = (0, react_1.useState)(null);
    /*
    useEffect(() => {
        renderTableBody ();
    }, []);
    */
    const formatDate = (inputDate) => {
        // 创建一个新的Date对象
        const dateObject = new Date(inputDate);
        // 使用内置的toLocaleString函数将日期格式化为字符串
        const formattedDate = dateObject.toLocaleString();
        return formattedDate;
    };
    // 过滤数据
    const filteredData = data.filter((item) => {
        return (item.requirements.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.apply_type.toLowerCase().includes(searchTerm.toLowerCase())
        // 添加其他属性的搜索条件...
        );
    });
    // 排序数据
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortedField === 'id') {
            // 如果是 id 字段，以数字形式比较
            const compareValue = parseInt(a[sortedField], 10) - parseInt(b[sortedField], 10);
            return sortOrder === 'asc' ? compareValue : -compareValue;
        }
        else {
            // 其他字段按字符形式比较
            const compareValue = String(a[sortedField]).localeCompare(String(b[sortedField]));
            return sortOrder === 'asc' ? compareValue : -compareValue;
        }
    });
    // 分页数据
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);
    // 处理页码变化
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setPage(1); // Reset to the first page when changing page size
    };
    // 处理排序变化
    const handleSortChange = (field) => {
        setSortedField(field);
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };
    const renderCard = (item) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_data_grid_module_scss_1.default.card), children: [(0, jsx_runtime_1.jsx)("div", { children: item.id }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: `userapplycontent/${item.id}`, target: "_self", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsx)(test_get_images_1.TestGetImages, { imageInfo: item.image_path_main }) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: `userapplycontent/${item.id}`, target: "_self", rel: "noopener noreferrer", children: item.requirements.length > 25
                        ? `${item.requirements.slice(0, 25)}...`
                        : item.requirements }) }), (0, jsx_runtime_1.jsx)("div", { children: item.apply_type }), (0, jsx_runtime_1.jsx)("div", { children: item.username }), (0, jsx_runtime_1.jsx)("div", { children: item.apply_time.toLocaleString() })] }, item.id));
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_data_grid_module_scss_1.default.root), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)(test_data_grid_module_scss_1.default.formRowSeparate), children: [(0, jsx_runtime_1.jsx)("div", { className: test_data_grid_module_scss_1.default.searchInput, children: (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }) }), (0, jsx_runtime_1.jsxs)("div", { className: test_data_grid_module_scss_1.default.pageSizeSelect, children: [(0, jsx_runtime_1.jsx)("label", { children: "Page Size" }), (0, jsx_runtime_1.jsxs)("select", { onChange: (e) => handlePageSizeChange(Number(e.target.value)), value: pageSize, children: [(0, jsx_runtime_1.jsx)("option", { value: "5", children: "5" }), (0, jsx_runtime_1.jsx)("option", { value: "10", children: "10" }), (0, jsx_runtime_1.jsx)("option", { value: "20", children: "20" })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_data_grid_module_scss_1.default.root), children: filteredData.length === 0 ? ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(test_data_grid_module_scss_1.default.card), children: "No matching data found" })) : (currentData.map((item) => renderCard(item))) }), (0, jsx_runtime_1.jsx)("div", { className: test_data_grid_module_scss_1.default.pagination, children: Array.from({ length: Math.ceil(filteredData.length / pageSize) }).map((_, index) => ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "primary", onClick: () => handlePageChange(index + 1), children: index + 1 }, index))) })] }));
};
exports.TestDataGrid = TestDataGrid;
