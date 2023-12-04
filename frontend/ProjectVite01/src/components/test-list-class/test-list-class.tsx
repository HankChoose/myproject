import classNames from 'classnames';
import styles from './test-list-class.module.scss';
import React, { Component } from 'react';
import axios from 'axios';
import {baseUrl} from '../../constants';

interface TestListClassState {
  data: any[]; // 替换 any[] 为实际的数据类型
  searchTerm: string; // 指定 searchTerm 的类型为字符串
  sortBy: string;
  sortOrder: string;
}

class TestListClass extends Component<{}, TestListClassState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [], // 存储从Django获取的数据
      searchTerm: '', // 搜索关键词
      sortBy: 'name', // 默认按名称排序
      sortOrder: 'asc', // 默认升序排列
    };
  }

  componentDidMount() {
    // 在组件加载时获取数据
    const apiUrl = `${baseUrl}/user-demand-list/`;
    axios.get(apiUrl)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }

  handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSortChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    this.setState({ sortBy: value });
  }

  handleSortOrderChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    this.setState({ sortOrder: value });
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

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={this.handleSearchChange}
        />

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
          {filteredAndSortedData.map(item => (
            <li key={item.id}>{item.name} - {item.age}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestListClass;
