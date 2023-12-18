import classNames from 'classnames';
import styles from './user-profile.module.scss';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import {baseUrl} from '../../constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Cookies from 'js-cookie';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export interface UserProfileProps {
    className?: string;
}
const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

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

   

    const [editable, setEditable] = useState(false);
    const [username, setUsername] = useState(''); // Initial username
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

   

    const usernames = userData.map(item => (
        <span key={item.id}>{item.username}</span>
        ));
    
    const email = userData.map(item => (
        <span key={item.id}>{item.email}</span>
        ));

    const firstusername = userData.length > 0 ? userData[0].username : null;
    const firstEmail = userData.length > 0 ? userData[0].email : null;
    return (
        <div>

        <Card style={{ width: '60vw' }}>
        
            <Card.Body>
                <Card.Title><h1>User Home</h1></Card.Title>
                <Card.Text>
            firstusername:{firstusername}
            firstEmail:{firstEmail}
                </Card.Text>
            
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><h3>Welcome! {usernames}</h3></ListGroup.Item>
                <ListGroup.Item>Username:{usernames}</ListGroup.Item>
                <ListGroup.Item>Email:{email}</ListGroup.Item>
              
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">My Post</Card.Link>
            </Card.Body>
            </Card>

        </div>
    );
};
