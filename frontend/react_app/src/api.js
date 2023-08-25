import axios from 'axios';
import BASE_URL from './api-config'; // 导入之前定义的基本URL
import Cookies from 'js-cookie';

// 获取CSRF令牌的函数（假设你已经定义了getCookie函数）
function getCSRFToken() {
  const csrfCookieName = 'csrftoken'; // 你的CSRF令牌Cookie的名称
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(csrfCookieName + '=')) {
          return cookie.substring(csrfCookieName.length + 1);
      }
  }
  return null;
}
const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

const login = async (email, password) => {

  try {
    const config = {
      headers: {
        'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
      },
    };
    
    //const response = await axios.post(`${BASE_URL}login/`, {
    const response = await axios.post('/accounts/login/', {
        email: email,
        password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 注册请求
const signup = async (userData) => {

  try {
    const config = {
      headers: {
        'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
      },
    };
    //const response = await axios.post(`${BASE_URL}register/`, userData);
    const response = await axios.post('/send-data/', userData,config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, signup };