
import {baseUrl} from './constants';
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
const token = localStorage.getItem('accessToken');

const headers = {
  Authorization: `Bearer ${token}`,
  'X-CSRFToken': csrfToken,
  };

const config1 = {
  headers: {
      'Content-Type': 'multipart/form-data',
      'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
      },
  };


const config3 = {
  headers: {
      'Content-Type': 'multipart/form-data',
      'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
      },
  };
const apiService = {
  
  get: async (url:string, username:string) => {
    const config2 = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
          },
      body: JSON.stringify({ new_username: username }),
      };

    try {
      const response = await axios.get(`${baseUrl}${url}`, config2);
      return response.data;
    } catch (error) {
      // 处理错误
      console.error('GET request error:', error);
      throw error;
    }
  },

  postToken: async (url:string, username:string) => {
    const config_postToken = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
          },
      body: JSON.stringify({ new_username: username }),
      };
    try {
      const response = await axios.post(`${baseUrl}${url}`, username, config_postToken);
      return response.data;
    } catch (error) {
      // 处理错误
      console.error('POST request error:', error);
      throw error;
    }
  },

  /////////////////////////////////////////////////fetch_data_token_get for /user-profile/
  fetch_data_token_get: async (url:string) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    //const [loading, setLoading] = useState(true);
    //const [hastoken, gettoken] = useState(true);

    if (token) {
      const config_fetch_data_token_get = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
            }
      };
      try {
        const response = await fetch(`${baseUrl}${url}`, config_fetch_data_token_get);
        if (response.ok) {
            const data = await response.json();
            console.log('fetch_data_token_get',data);
            setData(data);
        } else {
          // 处理请求失败的情况
          console.error('Failed to fetch user data:', response.status, response.statusText);
          setError("Failed to fetch user data:"+response.status+","+response.statusText);
        }
        
      } catch (error) {
          console.error('Error fetching user data:', error);
          //throw error;
          setError("Error fetching user data::"+error);
      }
    } else {
      // 处理令牌不存在的情况
      console.error('Access token is undefined or null.');
      setError("Access token is undefined or null.");
    }
    return { data, error};
  },


  fetch_update_token_post: async (url:string, username:string) => {
    const config_fetch_update_token_post = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
          },
      body: JSON.stringify({ new_username: username }),
      };
    try {
      const response = await axios.post(`${baseUrl}${url}`, config_fetch_update_token_post);
      return response.data;
    } catch (error) {
      // 处理错误
      console.error('POST request error:', error);
      throw error;
    }
  },
};

export default apiService;