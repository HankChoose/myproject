import axios from 'axios';
import BASE_URL from './api-config'; // 导入之前定义的基本URL
import Cookies from 'js-cookie';

 // 获取存储在 JavaScript 变量中的 CSRF 令牌
 const csrfToken = "{{ csrf_token }}";

const login = async (email, password) => {

  try {
   
    // 设置 Axios 的默认请求头
    axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

    //const response = await axios.post(`${BASE_URL}login/`, {
    const response = await instance.post('/accounts/login/', {
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
 
  // 设置 Axios 的默认请求头
  axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
  try {
    //const response = await axios.post(`${BASE_URL}register/`, userData);
    const response = await instance.postpost('/accounts/signup/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, signup };