
import {baseUrl} from './constants';
import Cookies from 'js-cookie';
import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom';


const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
const token = localStorage.getItem('accessToken');

const handleError = (error:any) => {
  // 处理错误，例如显示一个错误提示或者进行其他操作
  console.error('API Request Error:', error);
  throw error;
};
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
            console.log('fetch_data_token_get response data',data);
            return data;

        } else {
          // 处理请求失败的情况
          console.error('fetch_data_token_get response data error:', response.status, response.statusText);
          return handleError('fetch_data_token_get response data error:'+response.status +response.statusText);
         
        }
        
      } catch (error) {
          console.error('fetch_data_token_get error:', error);
          return handleError('fetch_data_token_get error:'+ error);
         
      }
    } else {
      // 处理令牌不存在的情况
      console.error('fetch_data_token_get token is undefined or null');
      return handleError('fetch_data_token_get token is undefined or null');
     
    }

};

export { fetch_data_token_get };