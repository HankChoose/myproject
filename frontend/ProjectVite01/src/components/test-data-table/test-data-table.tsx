import classNames from 'classnames';
import styles from './test-data-table.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FromRowRight } from '../from-row-right/from-row-right';
import { FromRowSeparate } from '../from-row-separate/from-row-separate';
import {baseUrl} from '../../constants';

interface Data {
    id: string;
    demand_type: string;
    demand_description: string;
    username: string;
    email: string;
    [key: string]: string; // 允许使用字符串索引
    // 其他属性...
}

export interface TestDataTableProps {
    className?: string;
    data:Data[];
}


export const TestDataTable = ({ className,data }: TestDataTableProps) => {
  // 状态管理
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // 每页显示的数据量
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' 或 'desc'
  const [sortedField, setSortedField] = useState('id'); // 按照哪个字段排序

  // 过滤数据
  const filteredData = data.filter((item: Data) => {
    return (
      item.demand_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
      // 添加其他属性的搜索条件...
    );
  });

  // 排序数据
  const sortedData = [...filteredData].sort((a, b) => {
    const compareValue = String(a[sortedField]).localeCompare(String(b[sortedField]));
    return sortOrder === 'asc' ? compareValue : -compareValue;
  });

  // 分页数据
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  // 处理页码变化
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePageSizeChange = (newPageSize: number) => {
      setPageSize(newPageSize);
      setPage(1); // Reset to the first page when changing page size
  };

  // 处理排序变化
  const handleSortChange = (field: string) => {
    setSortedField(field);
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };
  
  const renderTableBody = () => {
    if (filteredData.length === 0) {
      // 如果没有符合条件的数据，显示一行没有数据的行
      return (
        <tr>
          <td colSpan={4}>No matching data found</td>
          {/* 如果有更多的列，需要根据实际列数调整 colSpan */}
        </tr>
        
      );
    }

    return currentData.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.demand_description}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        {/* 其他列... */}
      </tr>
    ));
  };

  return (
    <div>
      <FromRowSeparate>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
            <label></label>
            <select onChange={(e) => handlePageSizeChange(Number(e.target.value))} value={pageSize}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        </div>
      </FromRowSeparate>
      
      {/* 表格 */}
      <Table striped bordered hover>
        {/* 表头 */}
        <thead>
          <tr>
            <th onClick={() => handleSortChange('id')}>ID</th>
            <th onClick={() => handleSortChange('demand_description')}>Demand Description</th>
            <th onClick={() => handleSortChange('username')}>Username</th>
            <th onClick={() => handleSortChange('email')}>Email</th>
            {/* 其他属性的表头... */}
          </tr>
        </thead>
        {/* 表格内容 */}
        <tbody>{renderTableBody()}</tbody>
      </Table>

      {/* 分页组件 */}
      <div>
        {Array.from({ length: Math.ceil(filteredData.length / pageSize) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};