import classNames from 'classnames';
import styles from './test-list-data-table.module.scss';
import { baseUrl } from '../../constants';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TestDataTable } from '../test-data-table/test-data-table';
import { fetch_data_csrf_get } from '../../apiService';

export interface TestListDataTableProps {
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


export const TestListDataTable = ({ className }: TestListDataTableProps) => {
    
    useEffect(() => {
        fetchData();
    }, [])
    const [data, setData] = useState<Data[]>([]);
    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const apiUrl = `/user-apply-mian-list/`;
        try {
            const data = await fetch_data_csrf_get(apiUrl);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            } else {
                console.log('fetchData response:', data);
            }
            setData(data);
        } catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
       
    };

    return <div className={classNames(styles.root, className)}> 
        <TestDataTable data={data} />
    </div>;
};
