import classNames from 'classnames';
import styles from './test-axios-post-2.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export interface TestAxiosPost2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestAxiosPost2 = ({ className }: TestAxiosPost2Props) => {
     const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
     const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });

    const config = {
       headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
      };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('/accounts/signup/', formData,config);
            console.log('User signed up successfully:', response.data);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" onChange={handleChange} value={formData.username} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} value={formData.email} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password1" onChange={handleChange} value={formData.password1} />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" name="password2" onChange={handleChange} value={formData.password2} />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
};
