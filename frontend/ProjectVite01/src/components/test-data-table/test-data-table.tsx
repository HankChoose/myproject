import classNames from 'classnames';
import styles from './test-data-table.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';


import { FcUp, FcDown } from 'react-icons/fc';
import { isLogVisible } from '../../constants';
import { TestGetImages } from '../test-get-images/test-get-images';

interface Data {
    id: string;
    apply_type: string;
    requirements: string;
    username: string;
    email: string;
    image_path_main: string;
    apply_time: Date; // Change the type to Date
    comment: string;
    comment2: string;
    [key: string]: string | Date; // Adjust the index signature if needed
    // Other properties...
}

export interface TestDataTableProps {
    className?: string;
    data: Data[];
}

export const TestDataTable = ({ className, data }: TestDataTableProps) => {
    // 状态管理
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5); // 每页显示的数据量
    const [sortOrder, setSortOrder] = useState('desc'); // 'asc' 或 'desc'
    const [sortedField, setSortedField] = useState('id'); // 按照哪个字段排序
    const [imageData, setImageData] = useState<string | null>(null);

    const sortHintText = "Table headers are clickable for sorting";
   
    /*
    useEffect(() => {
        renderTableBody ();
    }, []);
    */

    const formatDate = (inputDate: string) => {
        // 创建一个新的Date对象
        const dateObject = new Date(inputDate);

        // 使用内置的toLocaleString函数将日期格式化为字符串
        const formattedDate = dateObject.toLocaleString();

        return formattedDate;
    };

    // 过滤数据
    const filteredData = data.filter((item: Data) => {
        return (
            item.requirements.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        } else {
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
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
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
                <td>
                    <a
                        href={`userapplycontent/${item.id}`}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        <TestGetImages imageInfo={item.image_path_main} />
                    </a>
                </td>
                <td>
                    <a
                        href={`userapplycontent/${item.id}`}
                        target="_self"
                        rel="noopener noreferrer"
                    >
                        {item.requirements.length > 35 ? `${item.requirements.slice(0, 35)}...` : item.requirements}
                    </a>
                </td>
                <td>{item.apply_type}</td>
                <td style={{ display: 'none' }}>{item.username}</td>
                <td style={{ display: 'none' }}>{item.apply_time.toLocaleString()}</td>
            </tr>
        ));
    };

    return (
        <div className={classNames(styles.root)}>
            <div className={classNames(styles.formRowSeparate)}>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    /> <span className={classNames(styles.sortHintText )}>{sortHintText }</span>
                </div>
                <div>
                    <label>Page Size</label>
                    <select
                        onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                        value={pageSize}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            {/* 表格 */}
            <Table striped bordered hover>
                {/* 表头 */}
                <thead>
                    <tr>
                        <th
                            style={{ width: '80px', textAlign: 'center' }}
                            className={styles.handpoint}
                            onClick={() => handleSortChange('id')}
                        >
                            <span className={styles.TableTitleText}>ID</span>
                            {sortedField === 'id' && (
                                <span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>
                            )}
                        </th>
                        <th
                            style={{ textAlign: 'center' }}
                            className={styles.handpoint}
                            onClick={() => handleSortChange('id')}
                        >
                            <span className={styles.TableTitleText}>Images</span>
                            {sortedField === 'image_path_main' && (
                                <span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>
                            )}
                        </th>
                        <th
                            style={{ width: '450px', textAlign: 'center' }}
                            className={styles.handpoint}
                            onClick={() => handleSortChange('requirements')}
                        >
                            <span className={styles.TableTitleText}>Content</span>
                            {sortedField === 'requirements' && (
                                <span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>
                            )}
                        </th>
                        <th
                            style={{ width: '150px', textAlign: 'center' }}
                            className={styles.handpoint}
                            onClick={() => handleSortChange('apply_type')}
                        >
                            <span className={styles.TableTitleText}>Type</span>
                            {sortedField === 'apply_type' && (
                                <span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>
                            )}
                        </th>
                        <th
                            style={{ width: '150px', textAlign: 'center' , display: 'none'}}
                            className={styles.handpoint}
                            onClick={() => handleSortChange('username')}
                        >
                            <span className={styles.TableTitleText}>Username</span>
                            {sortedField === 'username' && (
                                <span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>
                            )}
                        </th>
                        <th
                            style={{ textAlign: 'center' , display: 'none'}}
                            className={styles.handpoint}
                            onClick={() => handleSortChange('apply_time')}
                        >
                            <span className={styles.TableTitleText}>Time</span>
                            {sortedField === 'apply_time' && (
                                <span>{sortOrder === 'asc' ? <FcUp /> : <FcDown />}</span>
                            )}
                        </th>

                        {/* 其他属性的表头... */}
                    </tr>
                </thead>
                {/* 表格内容 */}
                <tbody>{renderTableBody()}</tbody>
            </Table>

            {/* 分页组件 */}
            <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(filteredData.length / pageSize) }).map(
                    (_, index) => (
                        <Button variant="primary"  key={index} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </Button>
                    )
                )}
            </div>
        </div>
    );
};
