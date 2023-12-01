import classNames from 'classnames';
import styles from './test-list.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface TestListProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestList = ({ className }: TestListProps) => {
    interface data {
        id: string;
        username: string;
        email: string;
        // 其他属性...
    }
    const [data, setData] = useState<data[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    useEffect(() => {
        fetchData();
    }, [page, pageSize, sortOrder]);

    const fetchData = async () => {
        try {
        const response = await axios.get('https://zhiyouyuec.com/user-demand-list/');
        setData(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    const handlePageChange = (newPage:number) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setPage(1); // Reset to the first page when changing page size
    };

    const handleSortChange = (newSortOrder: string) => {
        setSortOrder(newSortOrder);
    };
    return <div className={classNames(styles.root, className)}>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>
          <label>Page Size: </label>
          <select onChange={(e) => handlePageSizeChange(Number(e.target.value))} value={pageSize}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <label>Sort Order: </label>
          <select onChange={(e) => handleSortChange(e.target.value)} value={sortOrder}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    
    
    </div>;
};
