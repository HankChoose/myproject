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

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

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
      username: 'hank1',
      email: 'hankchenv@gmail.com',
      password1: 'chy123hank$A',
      password2: 'chy123hank$A',
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
      const response = await axios.post('/api/signup/', userData, {
        headers: {
          'X-CSRFToken': csrfToken,
        },
      })
      //const response = await axios.post(`/api/${action}/`, userData);
      //console.log('Response:',response.data.message);
      console.log('Response from Django:', response.data);
      //const responseData = await response.json();
      setResponse(response.data); // 更新数据状态
      setError(null); // 清除错误状态
    } catch (error) {
      //console.error(error);
      console.error('Error sending data to Django:', error);
      setError(error.response ? error.response.data : error.message);
      setResponse(null); // 清除数据状态
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
        <div>
          {response && (
            <div>
              <h2>成功响应：</h2>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}

          {error && (
            <div>
              <h2>错误：</h2>
              <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
          )}
        </div>
       
    </>
   
  );
};

export default AuthTabs;