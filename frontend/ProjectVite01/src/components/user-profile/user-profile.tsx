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
    const [editing, setEditing] = useState(false);
    //const [editable, setEditable] = useState(false);
    const [username, setUsername] = useState(''); // Initial username

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

   
    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        // 处理保存逻辑，比如将 username 提交到服务器
        setEditing(false);
    };

    const handleCancel = () => {
        // 处理取消编辑逻辑，比如还原原始的 username
        setEditing(false);
    };

    const usernames = userData.map(item => (
        <span key={item.id}>{item.username}</span>
        ));
    
    const email = userData.map(item => (
        <span key={item.id}>{item.email}</span>
        ));

    const firstusername = userData.length > 0 ? userData[0].username : undefined;
    const firstEmail = userData.length > 0 ? userData[0].email : null;
    return (
        <div>

        <Card style={{ width: '60vw' }}>
        
            <Card.Body>
                <Card.Title><h1>User Home</h1></Card.Title>
                <Card.Text>
                <div className={classNames(styles.FormRow)}>
                    {editing ? (
                    <div>
                    <input
                        type="text"
                        value={username}
                        className={classNames(styles.input)}
                        placeholder={firstusername}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                    </div>
                ) : (
                    <div>
                    <span>{firstusername}</span>
                    <button onClick={handleEdit}>Edit</button>
                    </div>
                )}
                </div>
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
