import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      // 设置CSRF令牌作为请求头
      const config = {
        headers: {
          'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
          //'Referer': 'https://zhiyouyuea.com'
        },
      };
      const response = await axios.post('/accounts/signup/', formData, config);
      // 处理成功注册的情况，可以跳转到登录页面或者执行其他操作
      console.log('注册成功', response.data);
    } catch (error) {
      // 处理注册失败的情况
      console.error('注册失败', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="用户名"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="电子邮件"
      />
      <input
        type="password"
        name="password1"
        value={formData.password1}
        onChange={handleChange}
        placeholder="密码"
      />
      <input
        type="password"
        name="password2"
        value={formData.password2}
        onChange={handleChange}
        placeholder="确认密码"
      />
      <button type="submit">注册</button>
    </form>
  );
}

export default SignupForm;
