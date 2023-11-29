import classNames from 'classnames';
import styles from './user-profile.module.scss';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';

export interface UserProfileProps {
    className?: string;
}

export const UserProfile = ({ className }: UserProfileProps) => {
    interface UserData {
        username: string;
        // 其他属性...
    }
    const [userData, setUserData] = useState<UserData | null>(null);
    
    useEffect(() => {
        // 在组件加载时发送请求
        fetchData();
    }, []);

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('csrftoken');

        if (token) {
            try {
                const response = await fetch('hhttps://zhiyouyuec.com/user-profile/', {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,  // 注意这里的格式，应为 `Token ${token}`
                    'Content-Type': 'application/json',
                },
                });

                if (response.ok) {
                const data = await response.json();
                setUserData(data);
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

    return (
        <div>
        {userData ? (
            <div>
            <p>Welcome, {userData.username}!</p>
            {/* 其他用户信息的显示 */}
            </div>
        ) : (
            <p>Please log in to view user data.</p>
        )}
        </div>
    );
};
