import axios from 'axios';
import BASE_URL from './api-config'; // 导入之前定义的基本URL
import Cookies from 'js-cookie';

const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

// 获取CSRF令牌
axios.get('/accounts/csrf/').then((response) => {
  csrfToken = response.data.csrfToken;
});

const config = {
  headers: {
    'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
  },
};

const login = async (email, password) => {

  try {
  
    //const response = await axios.post(`${BASE_URL}login/`, {
    const response = await axios.post('/accounts/login/', {
        email: email,
        password: password,
    },config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 注册请求
const signup = async (userData) => {
 
  // 设置 Axios 的默认请求头
  axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
  try {
    //const response = await axios.post(`${BASE_URL}register/`, userData);
    const response = await axios.post('/accounts/signup/', userData,config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, signup };