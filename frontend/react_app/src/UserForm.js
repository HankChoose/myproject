import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function UserForm() {
  const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // ...其他字段
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://www.zhiyouyuea.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,  // 替换为真实的CSRF令牌
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // 处理成功响应
        console.log('Response:',response.data.message);
      } else {
        // 处理错误响应
      }
    } catch (error) {
      // 处理异常
      console.error(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="姓名"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="电子邮件"
      />
      {/* 其他输入字段 */}
      <button type="submit">提交</button>
    </form>
  );
}

export default UserForm;
