import classNames from 'classnames';
import styles from './user-post-list.module.scss';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TestDataTable } from '../test-data-table/test-data-table';
import { fetch_data_token_get } from '../../apiService';
import { TestDataGrid } from '../test-data-grid/test-data-grid';
import { BiSolidGrid } from 'react-icons/bi';
import { FaListUl } from 'react-icons/fa';

export interface UserPostListProps {
    className?: string;
}

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

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserPostList = ({ className }: UserPostListProps) => {
    const [data1, setData] = useState<Data[]>([]);
    const [viewMode, setViewMode] = useState('list'); // 初始视图模式为列表
    const toggleViewMode = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'));
    };

    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        fetchDataList();
    }, [])
   
    
    const fetchDataList = async () => {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-apply-user-list/`;
        try {
            const data = await fetch_data_token_get(apiUrl, token);
            if (data.error) {
                console.log('fetchDataList response data.message:', data.message);
            } else {
                console.log('fetchDataList response:', data);
            }
            setData(data);
        } catch (error) {
            // 处理错误
            console.error('fetchDataList error:', error);
        }
    };


    return <div className={classNames(styles.root)}>
                <div>
                    <button className={styles.buttonStyle} onClick={toggleViewMode}>
                     {viewMode === 'list' ? <><BiSolidGrid /> Grid View</> : <><FaListUl /> List View</>}
                    </button>
                    {viewMode === 'list' ? <TestDataTable data={data1} /> : <TestDataGrid data={data1} />}
                </div>
        </div>
};
