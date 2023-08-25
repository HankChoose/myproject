import React, { useState } from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthTabs = () => {
  const [username, setUsername] = useState('hank');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('chy123hank$A');
  const [password2, setPassword2] = useState('chy123hank$A');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const userData = { email,username, password,password2 };
    const userData = {
      username: 'hank2', // 用户名
      email: 'hankchenv@gmail.com', // 电子邮件
      password1: 'chy123hank$A', // 密码
      password2: 'chy123hank$A', // 确认密码
      // 其他注册相关信息
    };
  /*  
    const userData = {
      email: 'choose_last@163.com',
      password: '1234',
      // 添加要发送给Django的数据
    };
  
  const dataToSend = {
    key1: 'value1',
    key2: 'value2',
    // 添加要发送给Django的数据
  };
  */

    try {

      //const response = await axios.post('/send-data/',  { email, password } , {
      /*
      const response = await axios.post('/send-data/',  userData , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(userData),
      });
      */
      // 设置CSRF令牌作为请求头
      const config = {
        headers: {
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
          'Referer': 'https://zhiyouyuea.com'
        },
      };
      const response = await axios.post('/accounts/signup/', userData, config);
      
      //const response = await axios.post(`/api/${action}/`, userData);
      //console.log('Response:',response.data.message);
      console.log('Response from Django:', response.data);
    } catch (error) {
      //console.error(error);
      console.error('Error sending data to Django:', error);
    }
  };

  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button variant="warning" onClick={() => setAction('login')}>Login</Button>
        <Button variant="warning" onClick={() => setAction('register')}>Register</Button>
      </ButtonGroup>
   
      <h2>User {action}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} required />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={handlePasswordChange} required />
            <Form.Check type="checkbox" label="Show Password" onChange={handleShowPasswordToggle} />
          </Form.Group>
          <Button as="input" type="submit" value="Submit" />{''}
        </Form>
       
    </>
   
  );
};

export default AuthTabs;