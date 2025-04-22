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
const classnames_1 = __importDefault(require("classnames"));
const test_list_module_scss_1 = __importDefault(require("./test-list.module.scss"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_1 = __importStar(require("react"));
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
    return <div className={(0, classnames_1.default)(test_list_module_scss_1.default.root)}>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={e => {
            setSearchTerm(e.target.value);
            console.log("Search Term:", e.target.value);
        }}/>
  
        <div className={(0, classnames_1.default)(test_list_module_scss_1.default.formRowRight)}>
            <div>
                <label></label>
                <select onChange={(e) => handlePageSizeChange(Number(e.target.value))} value={pageSize}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div>
                <label></label>
                <select onChange={(e) => handleSortChange(e.target.value)} value={sortOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
        <react_bootstrap_1.Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Description</th>
                     <th>Username</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (<tr key={item.id}>
                        <td>
                            <input type="checkbox" checked={selectedItems.includes(Number(item.id))} onChange={() => handleCheckboxChange(Number(item.id))}/>
                        </td>
                        <td>{item.id}</td>
                        <td>{item.demand_type}</td>
                        <td>{item.demand_description}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                        <a href={`userapplycontent/${item.id}`} target="_blank" rel="noopener noreferrer">
                            Open
                        </a>
                        </td>
                       
                    </tr>))}
            </tbody>
        </react_bootstrap_1.Table>
        <div className={(0, classnames_1.default)(test_list_module_scss_1.default.formRowSeparate)}>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </div>
    </div>;
};
exports.TestList = TestList;
