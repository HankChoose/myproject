"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataGrid = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_data_grid_module_scss_1 = __importDefault(require("./test-data-grid.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = __importStar(require("react"));
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
    const renderCard = (item) => (<div key={item.id} className={(0, classnames_1.default)(test_data_grid_module_scss_1.default.card)}>
            <div>{item.id}</div>
            <div>
                <a href={`userapplycontent/${item.id}`} target="_self" rel="noopener noreferrer">
                    <test_get_images_1.TestGetImages imageInfo={item.image_path_main}/>
                </a>
            </div>
            <div>
                <a href={`userapplycontent/${item.id}`} target="_self" rel="noopener noreferrer">
                    {item.requirements.length > 25
            ? `${item.requirements.slice(0, 25)}...`
            : item.requirements}
                </a>
            </div>
            <div>{item.apply_type}</div>
            <div>{item.username}</div>
            <div>{item.apply_time.toLocaleString()}</div>
        </div>);
    return (<div className={(0, classnames_1.default)(test_data_grid_module_scss_1.default.root)}>
            <div className={(0, classnames_1.default)(test_data_grid_module_scss_1.default.formRowSeparate)}>
                <div className={test_data_grid_module_scss_1.default.searchInput}>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
                <div className={test_data_grid_module_scss_1.default.pageSizeSelect}>
                    <label>Page Size</label>
                    <select onChange={(e) => handlePageSizeChange(Number(e.target.value))} value={pageSize}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            <div className={(0, classnames_1.default)(test_data_grid_module_scss_1.default.root)}>
                {filteredData.length === 0 ? (<div className={(0, classnames_1.default)(test_data_grid_module_scss_1.default.card)}>No matching data found</div>) : (currentData.map((item) => renderCard(item)))}
            </div>

            <div className={test_data_grid_module_scss_1.default.pagination}>
                {Array.from({ length: Math.ceil(filteredData.length / pageSize) }).map((_, index) => (<react_bootstrap_1.Button variant="primary" key={index} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </react_bootstrap_1.Button>))}
            </div>
        </div>);
};
exports.TestDataGrid = TestDataGrid;
