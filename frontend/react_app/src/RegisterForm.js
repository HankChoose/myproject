// my_react_app/src/components/RegisterForm.js
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
  const handleRegister = async () => {
    try {
      const response = await axios.post('/register', { username, password }, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,  // 替换为真实的CSRF令牌
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;