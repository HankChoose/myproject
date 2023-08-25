import React, { useState } from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import Cookies from 'js-cookie';
import { login, signup } from './api'; // 导入之前创建的函数

const AuthTabs = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [action, setAction] = useState('login');
  const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const userData = { email, password };
  const handleRegister = async () => {
    try {
      const data = await signup(userData);
      console.log('注册成功', data);
    } catch (error) {
      console.error('注册失败', error);
    }
  };
  
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button variant="warning" onClick={() => setAction('login')}>Login</Button>
        <Button variant="warning" onClick={() => setAction('register')}>Register</Button>
      </ButtonGroup>
   
      <h2>User {action}</h2>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
        </Form.Group>
        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={handlePasswordChange} required />
          <Form.Check type="checkbox" label="Show Password" onChange={handleShowPasswordToggle} />
        </Form.Group>
        <button onClick={handleRegister}>注册</button>
    </>
   
  );
};

export default AuthTabs;
