import React, { Component, useState, useRef } from 'react';
import styles from './App.module.scss';
import { Label } from './components/label/label';
import axios from 'axios';
import Cookies from 'js-cookie';
import Classnames from 'classnames';
import { FormCard } from './components/form-card/form-card';
import { Linkarea2 } from './components/linkarea-2/linkarea-2';




function App() {
    const [showDefaultComponent, setShowDefaultComponent] = useState(true);
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [action, setAction] = useState('login');
    const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

    /*
    function handleOnSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('event', event);
    }
    */
    const handleOnSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userData = { email, password };
        try {
            // 设置CSRF令牌作为请求头
            const config = {
                headers: {
                    'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
                },
            };
            const response = await axios.post('/send-data/', userData, config);

            //const response = await axios.post(`/api/${action}/`, userData);
            //console.log('Response:',response.data.message);
            console.log('Response from Django:', response.data);
        } catch (error) {
            //console.error(error);
            console.error('Error sending data to Django:', error);
        }
    };
    return (
        <div className={styles.App}>
            <Linkarea2 />
        </div>
    );
}

export default App;
