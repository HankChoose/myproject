import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function SignupForm() {
  // 设置状态以保存用户输入的数据
  /*
  const [userData, setUserData] = useState({
    username: 'hank',
    email: 'hankchenv@gmail.com',
    password1: 'chy123hank$A',
    password2: 'chy123hank$A',
  });
  */
  const userData = {
    username: 'hank',
    email: 'hankchenv@gmail.com',
    password1: 'chy123hank$A',
    password2: 'chy123hank$A',
  };

  const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

  // 处理输入字段的变化
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // 处理注册表单提交
  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      // 发送 POST 请求到 Django Allauth 的注册 API 端点
      const response = await axios.post('/api/signup/', {
        username: 'hank',
        email: 'hankchenv@gmail.com',
        password1: 'chy123hank$A',
        password2: 'chy123hank$A',
      }, {
        headers: {
          'X-CSRFToken': csrfToken,
        },
      })

      console.log('SignupForm successful:', response.data);
      // 处理成功注册的逻辑，例如重定向到登录页面
    } catch (error) {
      console.error('SignupForm failed:', error.response.data);
      // 处理注册失败的逻辑，例如显示错误消息
    }
  };

  return (
    <div>
      <h2>SignupForm Form</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password1">Password:</label>
          <input
            type="password"
            id="password1"
            name="password1"
            value={userData.password1}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password2">Confirm Password:</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={userData.password2}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupForm;