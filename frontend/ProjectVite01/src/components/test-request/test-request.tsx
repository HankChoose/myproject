import classNames from 'classnames';
import styles from './test-request.module.scss';
import React, { useEffect, useState} from 'react';
import  {fetch_data_token_get} from '../../apiService';
import {baseUrl} from '../../constants';

export interface TestRequestProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestRequest = ({ className }: TestRequestProps) => {
    const apiUrl = 'user-profile/';
    const { data, error,fetchData} = fetch_data_token_get(apiUrl);
    
    const handle_fetch_data_token_get = async () => {
        // 执行fetch_data_by_token请求
        try {
            await fetchData();
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
