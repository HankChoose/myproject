import axios from 'axios';
import Cookies from 'js-cookie';
const instance = axios.create({
  baseURL: 'https://zhiyouyea.com/', // 替换为您的Django服务器的URL
  withCredentials: true, // 允许Axios发送包含cookie的跨域请求
});

// 在Axios的全局配置中设置CSRF令牌
instance.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken'); // 请替换为获取cookie的函数

export default instance;
