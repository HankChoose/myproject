import React, { useState } from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import Cookies from 'js-cookie';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
  
  const dataToSend = {
    key1: 'value1',
    key2: 'value2',
    // 添加要发送给Django的数据
  };

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
      const response = await axios.post('/send-data/', userData);
      
      //const response = await axios.post(`/api/${action}/`, userData);
      //console.log('Response:',response.data.message);
      console.log('Response from Django:', response.data);
    } catch (error) {
      //console.error(error);
      onsole.error('Error sending data to Django:', error);
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
