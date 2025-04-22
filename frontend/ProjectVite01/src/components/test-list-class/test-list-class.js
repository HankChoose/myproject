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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const constants_1 = require("../../constants");
class TestListClass extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = (e) => {
            this.setState({ searchTerm: e.target.value });
        };
        this.handleSortChange = (e) => {
            const { value } = e.target;
            this.setState({ sortBy: value });
        };
        this.handleSortOrderChange = (e) => {
            const { value } = e.target;
            this.setState({ sortOrder: value });
        };
        this.state = {
            data: [], // 存储从Django获取的数据
            searchTerm: '', // 搜索关键词
            sortBy: 'name', // 默认按名称排序
            sortOrder: 'asc', // 默认升序排列
        };
    }
    componentDidMount() {
        // 在组件加载时获取数据
        const token = localStorage.getItem('accessToken');
        const apiUrl = `${constants_1.baseUrl}/user-demand-list/`;
        if (token) {
            try {
                const response = fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`, // 注意这里的格式，应为 `Token ${token}`
                        'Content-Type': 'application/json',
                    },
                });
                if (response) {
                    console.log('response', response);
                }
                else {
                    // 处理请求失败的情况
                    console.error('Failed to fetch user data:', response);
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
    }
    render() {
        const { data, searchTerm, sortBy, sortOrder } = this.state;
        // 过滤和排序数据
        const filteredAndSortedData = data
            .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .sort((a, b) => {
            const order = sortOrder === 'asc' ? 1 : -1;
            return (a[sortBy] < b[sortBy] ? -1 : 1) * order;
        });
        return (<div>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={this.handleSearchChange}/>

        <select value={sortBy} onChange={this.handleSortChange}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          {/* Add more sorting options as needed */}
        </select>

        <select value={sortOrder} onChange={this.handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <ul>
          {filteredAndSortedData.map(item => (<li key={item.id}>{item.name} - {item.age}</li>))}
        </ul>
      </div>);
    }
}
exports.default = TestListClass;
