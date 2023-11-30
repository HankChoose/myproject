import classNames from 'classnames';
import styles from './test-axios-post-3.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

export interface TestAxiosPost3Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const TestAxiosPost3 = ({ className }: TestAxiosPost3Props) => {
    const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
    const config = {
       headers: {
         'Content-Type': 'multipart/form-data',
         'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };

    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        const response = await axios.post('/accounts/login/', formData,config);
        if (response.status === 200) {
            localStorage.setItem('accessToken', response.data.token);
            // 跳转到用户首页或执行其他登录后的逻辑
            //history.push('/userhome');
            console.log('Login OK',response.data);
            console.log('response.data.token',response.data.token);
            // 在这里进行你的其他操作，比如存储在本地存储中
            navigate('/react/userprofile'); // 在 useEffect 中调用 navigate
        } else {
            console.error('Login failed');
        }
        console.log(response.data);
        } catch (error) {
        console.error('Error creating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
            Username:
            <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            />
        </label>

        <label>
            Password:
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </label>

        <button type="submit">Sign Up</button>
        </form>
    );
};