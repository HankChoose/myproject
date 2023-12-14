import classNames from 'classnames';
import styles from './user-profile.module.scss';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import {baseUrl} from '../../constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

export interface UserProfileProps {
    className?: string;
}

export const UserProfile = ({ className }: UserProfileProps) => {
    interface UserData {
        id: string;
        username: string;
        email: string;
        // 其他属性...
    }
    const [userData, setUserData] = useState<UserData[]>([]);
    const [isVerified, setIsVerified] = useState(false);
    useEffect(() => {
        // 在组件加载时发送请求
        fetchData();
        verifyEmail();
    }, []);

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('accessToken');
        const apiUrl = `${baseUrl}/user-profile/`;
        if (token) {
            try {
                const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,  // 注意这里的格式，应为 `Token ${token}`
                    'Content-Type': 'application/json',
                },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('fetchData_data',data);
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

    const verifyEmail = async () => {
        // 获取保存在本地存储中的令牌
        const token = localStorage.getItem('accessToken');
        const apiUrl = `${baseUrl}/api/check_verification_status/`;
        if (token) {
            try {
                const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,  // 注意这里的格式，应为 `Token ${token}`
                    'Content-Type': 'application/json',
                },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('verifyEmail_data',data);
                    setIsVerified(data.is_verified);
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

    const handleResendVerification = () => {
        // 发送请求重新发送验证邮件
        axios.post('/api/resend_verification_email/')
            .then(response => {
                console.log('Verification email sent successfully:', response.data.message);
            })
            .catch(error => {
                console.error('Error resending verification email:', error);
            });
    };


    const [editable, setEditable] = useState(false);
    const [username, setUsername] = useState('hankchenv'); // Initial username
    const handleEditClick = () => {
        setEditable(true);
    };

    const handleSaveClick = () => {
        setEditable(false);
        // Add logic to save the updated username to the server
        // For simplicity, we'll just log it to the console here
        console.log('Saving username:', username);
    };

    const handleCancelClick = () => {
        setEditable(false);
        // If the user cancels, you might want to revert changes or do nothing
        // For simplicity, we'll just log a message here
        console.log('Edit cancelled');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    return (
        <div>
        {userData ? (
            <div>
            <h1>User Home</h1>
            <p>Welcome!</p>

            <Table bordered>
            <thead>
            <tr>
            <th>Item</th>
            <th>Detail</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>UserName:</td>
                <td> 
                {userData.map(item => (
                <li key={item.id}>{item.username}</li>
                ))}

                <p>{editable ? <input type="text" value={username} onChange={handleChange} /> : username}</p>
                {editable ? (
                    <div>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                    </div>
                ) : (
                    <button onClick={handleEditClick}>Edit</button>
                )}
               </td>
                </tr>
                <tr>
                <td>Email:</td>
                <td>
                    {userData.map(item => (
                    <li key={item.id}>{item.email}</li>
                    ))}

                     {isVerified ? (
                        <p>Your email is verified.</p>
                    ) : (
                        <div>
                            <p>Your email is not verified. Please check your email and click the verification link.</p>
                            <button onClick={handleResendVerification}>Resend Verification Email</button>
                        </div>
                    )}
              </td>
                </tr>
                <tr>
                <td>Type</td>
                <td>111</td>
                </tr>
                <tr>
                <td>Comment</td>
                <td>wwww</td>
                </tr>
            </tbody>
            </Table>

            </div>
        ) : (
            <p>Please log in to view user data.</p>
        )}

         
        </div>
    );
};
