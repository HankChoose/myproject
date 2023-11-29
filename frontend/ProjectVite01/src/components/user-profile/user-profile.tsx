import classNames from 'classnames';
import styles from './user-profile.module.scss';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';

export interface UserProfileProps {
    className?: string;
}


interface UserData {
  id: number;
  username: string;
  email: string;
  // Add more fields as needed
}
export const UserProfile = ({ className }: UserProfileProps) => {
    //const [userData, setUserData] = useState(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://zhiyouyuec.com/user-profile/', {
            headers: {
                'Authorization': `Token ${token}`
            }
            });

            if (response.status === 200) {
                setUserData(response.data);
                console.log(response.data);
            } else {
            console.error('Failed to fetch user data. Unexpected status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div>
        {userData ? (
            <div>
            <h1>User Data</h1>
            <p>ID: {userData.id}</p>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            {/* Add more fields as needed */}
            </div>
        ) : (
            <p>Loading user data...</p>
        )}
        </div>
    );
};
