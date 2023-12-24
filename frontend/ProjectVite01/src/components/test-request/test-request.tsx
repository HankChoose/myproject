import classNames from 'classnames';
import styles from './test-request.module.scss';
import React, { useEffect } from 'react';
import apiService from '../../apiService';
import {baseUrl} from '../../constants';

export interface TestRequestProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestRequest = ({ className }: TestRequestProps) => {
    useEffect(() => {
        fetchData();
    }, []);
   
    // GET 请求示例
    const fetchData = async () => {
    try {
        console.log('GET response data:', "responseData");
    } catch (error) {
        // 处理错误
        console.error('Error fetching data:', error);
    }
    };

    const handle_fetch_data_token_get = async () => {
        // 执行fetch_data_by_token请求
        const apiUrl = `${baseUrl}/user-profile/`;
        try {
            const { data, error } = await apiService.fetch_data_token_get(apiUrl);
            console.log('fetch_data_token_get response data:', data);
            console.log('fetch_data_token_get response data:', error);
        } catch (error) {
            // 处理错误
            console.error('handle_fetch_data_token_get:', error);
        }
    };
    return <div className={classNames(styles.root, className)}>
        <button onClick={handle_fetch_data_token_get}>fetch_data_token_get</button>
    </div>;
};
