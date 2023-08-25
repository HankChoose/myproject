import axios from 'axios';
import BASE_URL from './api-config'; // 导入之前定义的基本URL
import Cookies from 'js-cookie';
import instance from './axios-instance'; // 导入上面配置的Axios实例


const login = async (email, password) => {

  try {

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
  try {
    //const response = await axios.post(`${BASE_URL}register/`, userData);
    const response = await instance.postpost('/accounts/signup/', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, signup };