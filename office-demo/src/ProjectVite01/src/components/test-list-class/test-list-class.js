"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
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
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search...", value: searchTerm, onChange: this.handleSearchChange }), (0, jsx_runtime_1.jsxs)("select", { value: sortBy, onChange: this.handleSortChange, children: [(0, jsx_runtime_1.jsx)("option", { value: "name", children: "Name" }), (0, jsx_runtime_1.jsx)("option", { value: "age", children: "Age" })] }), (0, jsx_runtime_1.jsxs)("select", { value: sortOrder, onChange: this.handleSortOrderChange, children: [(0, jsx_runtime_1.jsx)("option", { value: "asc", children: "Ascending" }), (0, jsx_runtime_1.jsx)("option", { value: "desc", children: "Descending" })] }), (0, jsx_runtime_1.jsx)("ul", { children: filteredAndSortedData.map(item => ((0, jsx_runtime_1.jsxs)("li", { children: [item.name, " - ", item.age] }, item.id))) })] }));
    }
}
exports.default = TestListClass;
