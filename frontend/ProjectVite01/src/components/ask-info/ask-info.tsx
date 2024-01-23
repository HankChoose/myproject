import classNames from 'classnames';
import styles from './ask-info.module.scss';

import { useFormik, FormikValues,Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { axios_form_data_post, axios_json_data_post, axios_json_data_get,fetch_data_token_get, fetch_data_token_post} from '../../apiService';

export interface AskInfoProps {
    className?: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .matches(/^[^—]*$/, 'Email cannot contain special characters--')
    .required('Email address is required'),

  phone: Yup.string()
    .nullable()
    .matches(/^[0-9-]+$/, 'Invalid phone number')
    .min(10, 'Phone number must be at least 5 characters')
    .max(20, 'Phone number must be 20 characters or less'),

  username: Yup.string()
    .matches(/^[^\s-]+$/, 'Username cannot contain spaces or -')
    .max(30, 'Username must be 30 characters or less')
    .required('Username is required'),

  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be 1000 characters or less')
    .required('Message is required'),
});


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AskInfo = ({ className }: AskInfoProps) => {
    // 设置应用根元素
    interface UserData {
        id: string;
        username: string;
        email: string;
        // 其他属性...
    }
    const [userData, setUserData] = useState<UserData[]>([]);
    const token = localStorage.getItem('accessToken');
    useEffect(() => {
        // 在组件挂载后，通过引用获取 textarea 的值
        fetchData();
    
    }, []); // 注意：这里的空数组表示仅在组件挂载时执行
    
    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            username: '',
            message: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //handleAskInfo(values);
        },
    });

    const fetchData = async () => {
        // 获取保存在本地存储中的令牌

        const apiUrl = `/user-profile/`;
        try {
            const data = await fetch_data_token_get(apiUrl, token);
            if (data.error) {
                console.log('fetchData response data.message:', data.message);
            } else {
                console.log('fetchData response:', data);
            }
            setUserData(data);
            // 更新 Formik 的 initialValues
            console.log('data.email', data.email);
            console.log('data.username', data.username);
            
            formik.setValues({
                ...formik.values,
                email: data.email || '',
                username: data.username || '',
                phone: '',
                message:  '',
                // 添加其他字段的默认值
            });
           
        } catch (error) {
            // 处理错误
            console.error('fetchData error:', error);
        }
    };

    //------------------------------------------------------->handleAskInfo
    const handleAskInfo =async (values: FormikValues) => {
        // Logic for handling sign-up form submission
        const apiUrl = `/accounts/signup/`;
      
        // Split the email address at the "@" symbol
        const parts = values.email.split('@');

        const userData = {
            username: parts[0],
            email: values.email,
            password1: values.password,
            password2: values.password,
            // 添加要发送给Django的数据
        };

        try {
            const data = await axios_form_data_post(apiUrl,userData,'multipart/form-data');
            if (data.error){
                console.log('GET Response signup failed data.message:', data.message);
            }else{
                console.log('GET Response Signup OK:', data);
                const apiUrl2 = `/user-token/`;
                 const userData2 = {
                    username: values.email,
                    password: values.password,
                    // 添加要发送给Django的数据
                };
                
                console.log('Handling sign-up form userData2:', userData2);
                const data2 = await axios_json_data_post(apiUrl2,userData2);
                if (data2.error){
                    console.log('GET Response signup get token fail data.message:', data.message);
                    const loginSuccess = false;/* 模拟请求返回的值 */ 
                   
                }else{

                    localStorage.setItem('accessToken', data2.token);

                }

            }
        } catch (error) {
            // 处理错误
            console.error('handleSignUp error:', error);
        }
    };

    const firstusername = userData.length > 0 ? userData[0].username : undefined;
    const firstEmail = userData.length > 0 ? userData[0].email : undefined;
    //const firstusername = "zzz";
    //const firstEmail = "eee";

    return (
       <div>
            <div className={styles.FromArea}>
                <form onSubmit={formik.handleSubmit}>
                  
                    <div className={classNames(styles.FormRowSmall)}> </div>
                    <div>
                        <div>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username  || firstusername || ''}
                                className={classNames(styles.Input)}
                            />

                        </div>
                        <div  className={classNames(styles.FormRow)}>
                            {formik.touched.username && formik.errors.username ? (
                                <div className={classNames(styles.ErrorsArea)}>
                                    {formik.errors.username}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email || firstEmail || ''}
                                className={classNames(styles.Input)}
                            />
                           
                        </div>
                        <div className={classNames(styles.FormRow)}>
                            {formik.touched.email && formik.errors.email ? (
                                <div className={classNames(styles.ErrorsArea)}>
                                    {formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <div>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                className={classNames(styles.Input)}
                            />
                        </div>
                        <div className={classNames(styles.FormRow)}>
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className={classNames(styles.ErrorsArea)}>
                                    {formik.errors.phone}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <div >
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={4}
                                cols={38}
                                onChange={formik.handleChange}
                                onBlur={(e) => {
                                    formik.handleBlur(e);
                                    formik.handleChange(e);  // 触发 onChange 事件
                                }}
                                placeholder="Enter text here"> 
                            </textarea>
 
                        </div>
                        <div className={classNames(styles.FormRow)}>
                            {formik.touched.message && formik.errors.message ? (
                                <div className={classNames(styles.ErrorsArea)}>
                                    {formik.errors.message}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <button type="submit" className={styles.ButtonSubmit}>
                           Submit
                        </button>
                    </div>

                    <div> </div>
                </form>
            </div>
        </div>
    );
};
