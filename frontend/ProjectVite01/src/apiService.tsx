
import {baseUrl} from './constants';
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
const token = localStorage.getItem('accessToken');


/////////////////////////////////////////////////fetch_data_token_get for /user-profile/
const fetch_data_token_get = (url:string) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  //const [loading, setLoading] = useState(true);
  //const [hastoken, gettoken] = useState(true);
  
  const fetchData = async () => {
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
            console.log('fetch_data_token_get response data',data);
            setData(data);
        } else {
          // 处理请求失败的情况
          console.error('fetch_data_token_get response data error:', response.status, response.statusText);
          setError("fetch_data_token_get response data error:"+response.status+","+response.statusText);
        }
        
      } catch (error) {
          console.error('fetch_data_token_get error:', error);
          //throw error;
          setError("fetch_data_token_get error:"+error);
      }
    } else {
      // 处理令牌不存在的情况
      console.error('fetch_data_token_get token is undefined or null');
      setError("fetch_data_token_get token is undefined or null");
    }

  };
  
  return { data, error,fetchData};
};

export { fetch_data_token_get };