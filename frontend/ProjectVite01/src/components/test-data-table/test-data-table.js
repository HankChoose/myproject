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
exports.TestDataTable = void 0;
const classnames_1 = __importDefault(require("classnames"));
const test_data_table_module_scss_1 = __importDefault(require("./test-data-table.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const fc_1 = require("react-icons/fc");
const test_get_images_1 = require("../test-get-images/test-get-images");
const TestDataTable = ({ className, data }) => {
    // 状态管理
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const [page, setPage] = (0, react_1.useState)(1);
    const [pageSize, setPageSize] = (0, react_1.useState)(5); // 每页显示的数据量
    const [sortOrder, setSortOrder] = (0, react_1.useState)('desc'); // 'asc' 或 'desc'
    const [sortedField, setSortedField] = (0, react_1.useState)('id'); // 按照哪个字段排序
    const [imageData, setImageData] = (0, react_1.useState)(null);
    const sortHintText = "Table headers are clickable for sorting";
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
    const renderTableBody = () => {
        if (filteredData.length === 0) {
            // 如果没有符合条件的数据，显示一行没有数据的行
            return (<tr>
                    <td colSpan={4}>No matching data found</td>
                    {/* 如果有更多的列，需要根据实际列数调整 colSpan */}
                </tr>);
        }
        return currentData.map((item) => (<tr key={item.id}>
                <td>{item.id}</td>
                <td>
                    <a href={`userapplycontent/${item.id}`} target="_self" rel="noopener noreferrer">
                        <test_get_images_1.TestGetImages imageInfo={item.image_path_main}/>
                    </a>
                </td>
                <td>
                    <a href={`userapplycontent/${item.id}`} target="_self" rel="noopener noreferrer">
                        {item.requirements.length > 35 ? `${item.requirements.slice(0, 35)}...` : item.requirements}
                    </a>
                </td>
                <td>{item.apply_type}</td>
                <td style={{ display: 'none' }}>{item.username}</td>
                <td style={{ display: 'none' }}>{item.apply_time.toLocaleString()}</td>
            </tr>));
    };
    return (<div className={(0, classnames_1.default)(test_data_table_module_scss_1.default.root)}>
            <div className={(0, classnames_1.default)(test_data_table_module_scss_1.default.formRowSeparate)}>
                <div>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/> <span className={(0, classnames_1.default)(test_data_table_module_scss_1.default.sortHintText)}>{sortHintText}</span>
                </div>
                <div>
                    <label>Page Size</label>
                    <select onChange={(e) => handlePageSizeChange(Number(e.target.value))} value={pageSize}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            {/* 表格 */}
            <react_bootstrap_1.Table striped bordered hover>
                {/* 表头 */}
                <thead>
                    <tr>
                        <th style={{ width: '80px', textAlign: 'center' }} className={test_data_table_module_scss_1.default.handpoint} onClick={() => handleSortChange('id')}>
                            <span className={test_data_table_module_scss_1.default.TableTitleText}>ID</span>
                            {sortedField === 'id' && (<span>{sortOrder === 'asc' ? <fc_1.FcUp /> : <fc_1.FcDown />}</span>)}
                        </th>
                        <th style={{ textAlign: 'center' }} className={test_data_table_module_scss_1.default.handpoint} onClick={() => handleSortChange('id')}>
                            <span className={test_data_table_module_scss_1.default.TableTitleText}>Images</span>
                            {sortedField === 'image_path_main' && (<span>{sortOrder === 'asc' ? <fc_1.FcUp /> : <fc_1.FcDown />}</span>)}
                        </th>
                        <th style={{ width: '450px', textAlign: 'center' }} className={test_data_table_module_scss_1.default.handpoint} onClick={() => handleSortChange('requirements')}>
                            <span className={test_data_table_module_scss_1.default.TableTitleText}>Content</span>
                            {sortedField === 'requirements' && (<span>{sortOrder === 'asc' ? <fc_1.FcUp /> : <fc_1.FcDown />}</span>)}
                        </th>
                        <th style={{ width: '150px', textAlign: 'center' }} className={test_data_table_module_scss_1.default.handpoint} onClick={() => handleSortChange('apply_type')}>
                            <span className={test_data_table_module_scss_1.default.TableTitleText}>Type</span>
                            {sortedField === 'apply_type' && (<span>{sortOrder === 'asc' ? <fc_1.FcUp /> : <fc_1.FcDown />}</span>)}
                        </th>
                        <th style={{ width: '150px', textAlign: 'center', display: 'none' }} className={test_data_table_module_scss_1.default.handpoint} onClick={() => handleSortChange('username')}>
                            <span className={test_data_table_module_scss_1.default.TableTitleText}>Username</span>
                            {sortedField === 'username' && (<span>{sortOrder === 'asc' ? <fc_1.FcUp /> : <fc_1.FcDown />}</span>)}
                        </th>
                        <th style={{ textAlign: 'center', display: 'none' }} className={test_data_table_module_scss_1.default.handpoint} onClick={() => handleSortChange('apply_time')}>
                            <span className={test_data_table_module_scss_1.default.TableTitleText}>Time</span>
                            {sortedField === 'apply_time' && (<span>{sortOrder === 'asc' ? <fc_1.FcUp /> : <fc_1.FcDown />}</span>)}
                        </th>

                        {/* 其他属性的表头... */}
                    </tr>
                </thead>
                {/* 表格内容 */}
                <tbody>{renderTableBody()}</tbody>
            </react_bootstrap_1.Table>

            {/* 分页组件 */}
            <div className={test_data_table_module_scss_1.default.pagination}>
                {Array.from({ length: Math.ceil(filteredData.length / pageSize) }).map((_, index) => (<react_bootstrap_1.Button variant="primary" key={index} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </react_bootstrap_1.Button>))}
            </div>
        </div>);
};
exports.TestDataTable = TestDataTable;
