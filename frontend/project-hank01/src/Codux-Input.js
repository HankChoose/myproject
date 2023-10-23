import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Input = ({ className, id, name }: InputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input id={id} name={name} />
        </div>
    );
};

import classNames from 'classnames';
import styles from './label.module.scss';

export interface LabelProps {
    className?: string;
    children?:JSX.Element | Array<JSX.Element|string> | string;
    htmlFor?:string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Label = ({ className, children, htmlFor  }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label htmlFor={htmlFor}>{ children }</label>
        </div>
    );
};



import React, { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import Input_module from './components/input/input.module.scss';
import { Label } from './components/label/label';
import { Button } from './components/button/button';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
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
            <h1>Sign in</h1>
            <form onSubmit={handleOnSubmit}>
                <Label htmlFor={'email'}>Email</Label>
                <Input className={Input_module.input} id={'email'} name="email" />
                <Label htmlFor={'password'}>Password</Label>
                <input type="password" id={'password'} name="password" />
                <Button>Sign in</Button>
            </form>
        </div>
    );
}

export default App;

No account yet?Register
Already have an account?Sign in