import axios from 'axios';
import BASE_URL from './api-config'; // 导入之前定义的基本URL
import Cookies from 'js-cookie';

const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
const login = async (username, password) => {
const axiosInstance = axios.create({
  headers: {
    'X-CSRFToken': csrfToken, // 添加CSRF令牌到请求头部
  },
});
  try {

    //const response = await axios.post(`${BASE_URL}login/`, {
    const response = axiosInstance.post('/accounts/login/', {
        username: username,
        password: password,
    }, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 注册请求
const signup = async (userData) => {
  try {
    //const response = await axios.post(`${BASE_URL}register/`, userData);
    const response = axiosInstance.post('/accounts/signup/', userData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, signup };