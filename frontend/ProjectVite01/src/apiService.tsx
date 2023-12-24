
import {baseUrl} from './constants';
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
const token = localStorage.getItem('accessToken');

const [data, setData] = useState(null);
const [error, setError] = useState<string | null>(null);
//const [loading, setLoading] = useState(true);
//const [hastoken, gettoken] = useState(true);

/////////////////////////////////////////////////fetch_data_token_get for /user-profile/
const fetch_data_token_get = async (url:string) => {
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
};

export { fetch_data_token_get};
