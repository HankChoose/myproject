import classNames from 'classnames';
import styles from './test-list.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { FromRowRight } from '../from-row-right/from-row-right';
import { FromRowSeparate } from '../from-row-separate/from-row-separate';

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
        demand_type: string;
        demand_description: string;
        // 其他属性...
    }
    const [data, setData] = useState<data[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    useEffect(() => {
        fetchData();
    }, [page, pageSize, sortOrder]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (newPageSize: number) => {
        setPageSize(newPageSize);
        setPage(1); // Reset to the first page when changing page size
    };

    const handleSortChange = (newSortOrder: string) => {
        setSortOrder(newSortOrder);
    };

    const handleCheckboxChange = (id: number) => {
        const selected = selectedItems.includes(id);

        if (selected) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleDelete = () => {
        const updatedData = data.filter(item => !selectedItems.includes(Number(item.id)));
        setData(updatedData);
        setSelectedItems([]);
    };

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('accessToken');

        if (token) {
            try {
                const response = await fetch('https://zhiyouyuec.com/user-demand-list/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,  // 注意这里的格式，应为 `Token ${token}`
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('data', data);
                    setData(data);
                } else {
                    // 处理请求失败的情况
                    console.error('Failed to fetch user data:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        } else {
            // 处理令牌不存在的情况
            console.error('Access token is undefined or null.');
        }
    };

    return <div className={classNames(styles.root, className)}>
        <FromRowRight>
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
        </FromRowRight>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Usernam</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(Number(item.id))}
                                onChange={() => handleCheckboxChange(Number(item.id))}
                            />
                        </td>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.demand_type}</td>
                        <td>{item.demand_description}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <FromRowSeparate>
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </FromRowSeparate>
    </div>;
};