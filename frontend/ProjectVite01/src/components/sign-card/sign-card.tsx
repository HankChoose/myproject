import classNames from 'classnames';
import styles from './sign-card.module.scss';
import { useFormik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie';
import { baseUrl } from '../../constants';

export interface SignCardProps {
    className?: string;
    formType?: 'signin' | 'signup' | 'resetpw';
}

const validationSchemaSignin = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password required'),

});

const validationSchemaSignup = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^—]*$/, 'Email cannot contain special characters--')
        .required('Email address is required'),
    password: Yup.string().min(6, 'Password needs to be at least 6 characters')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .matches(/^[^—]*$/, 'Password cannot contain special characters--')
        .required('Password agian required'),
});

const validationSchemaResetpw = Yup.object().shape({
    email: Yup.string().email('Invalid email address')
        .matches(/^[^\-]*$/, 'Password cannot contain special characters--')
        .required('Email address is required'),

});

const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token

const handleSignIn = async (values: FormikValues) => {
    // Logic for handling sign-in form submission
    console.log('Handling sign-in form submission:', values);
    // Add code to submit data for sign-in
    //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
    const navigate = useNavigate();
    const apiUrl = `${baseUrl}/accounts/login/`;
    const apiUr2= `${baseUrl}//user-token/`;
    const userData = {
      login: values.email,
      password: values.password,
      // 添加要发送给Django的数据
    };

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };
    
    console.log('Handling sign-in form userData:', userData,config);

    try {
            const response = await axios.post(apiUrl, userData,config);
            if (response.status === 200) {
                // 跳转到用户首页或执行其他登录后的逻辑
                //history.push('/userhome');
                console.log('Login OK',response.data);
                const response2 = await axios.post(apiUr2, {
                    username: userData.login,
                    password: userData.password,
                });
                console.log('Login2 OK',response2.data);
                localStorage.setItem('accessToken', response2.data.token);
                console.log('response2.data.token',response2.data.token);
                // 在这里进行你的其他操作，比如存储在本地存储中
                navigate('/react/userprofile'); // 在 useEffect 中调用 navigate
            } else {
                console.error('Login failed');
            }
        console.log(response.data);
        } catch (error) {
        console.error('Error creating user:', error);
        }
   
};

const handleSignUp =async (values: FormikValues) => {
    // Logic for handling sign-up form submission
     console.log('Handling sign-up form submission:', values);
    // Add code to submit data for sign-up
    const navigate = useNavigate();
    const apiUrl = `${baseUrl}/accounts/signup/`;
    const apiUr2= `${baseUrl}//user-token/`;

    const userData = {
      username: values.email,
      email: values.email,
      password: values.password,
      password2: values.password,
      // 添加要发送给Django的数据
    };
    console.log('Handling sign-up form userData:', userData);

    const config = {
       headers: {
         'Content-Type': 'multipart/form-data',
         'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
    };
   
    try {
        const response = await axios.post(apiUrl, userData,config);
        if (response.status === 201) {
            // 跳转到用户首页或执行其他登录后的逻辑
            //history.push('/userhome');
            console.log('Sign-up OK',response.data);
            const response2 = await axios.post(apiUr2, {
                username: userData.username,
                password: userData.password,
            });
            console.log('Login2 OK',response2.data);
            localStorage.setItem('accessToken', response2.data.token);
            console.log('response2.data.token',response2.data.token);
            // 在这里进行你的其他操作，比如存储在本地存储中
            navigate('/react/userprofile'); // 在 useEffect 中调用 navigate
        } else {
            console.error('Login failed');
        }
    } catch (error) {
    console.error('Error creating user:', error);
    }
};

const handleResetPassword =async (values: FormikValues) => {
    // Logic for handling reset password form submission
    console.log('Handling reset password form submission:', values);
    // Add code to submit data for reset password
    //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
    const userData = {
      email: values.email,
    };
    const config = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
        },
        body: JSON.stringify(userData),
    };
    const apiUrl = `${baseUrl}/accounts/password/reset/`;
    try {
        const response = await axios.post(apiUrl, userData,config);
        if (response.status === 200) {
            console.log('Password reset email sent:', response.data);
        } else {
            console.error('Password reset email sent failed');
        }  
    } catch (error) {
    console.error('Error sending password reset email:', error);
    }
};


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignCard = ({ className, formType = 'signin' }: SignCardProps) => {

    const validationSchema =
        formType === 'signin' ? (
            validationSchemaSignin
        ) : (formType === 'signup') ? (
            validationSchemaSignup
        ) : (formType === 'resetpw') ? (
            validationSchemaResetpw
        ) : (
            <span />
        );

    const linkresetpw =
        formType === 'signin' ? (
            <Link to="/react/resetpw"> Forgot my password </Link>
        ) : (
            <span />
        );

    const linkheader =
        formType === 'signin' ? (
            <span>Need an account?</span>
        ) : (formType === 'signup' || formType === 'resetpw') ? (
            <span>Have an account already?</span>
        ) : (
            <span />
        );

    const linksign =
        formType === 'signin' ? (
            <Link to="/react/signup"> Sign Up </Link>
        ) : (formType === 'signup' || formType === 'resetpw') ? (
            <Link to="/react/signin"> Sign In </Link>
        ) : (
            <span />
        );

    const titlecard =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : formType === 'resetpw' ? 'Reset password' : <span />;


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            // 添加其他字段的初始值
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (formType === 'signin') {
                handleSignIn(values);
            } else if (formType === 'signup') {
                handleSignUp(values);
            } else if (formType === 'resetpw') {
                handleResetPassword(values);
            }
        },
    });

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (

        <div className={classNames(styles.root)}>
            <div className={styles.FromArea}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={classNames(styles.FormRow)}><h1> {titlecard}</h1></div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
                    <div className={classNames(styles.FormRow)}>{linkheader}{linksign}</div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
                    <div>
                        <div className={classNames(styles.FormRow)}>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={classNames(styles.Input)}
                            />
                        </div>
                        <div className={classNames(styles.FormRow)}>
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* 添加其他字段的输入和验证显示 */}

                    {formType === 'signin' || formType === 'signup' ? (
                        <div>
                            <div className={classNames(styles.FormRow)}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className={classNames(styles.Inputpw)}
                                />
                                <button onClick={togglePasswordVisibility} className={styles.ButtonSee}>
                                    {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
                                </button>
                            </div>
                            <div className={classNames(styles.FormRow)}>
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>
                    ) : null}

                    {formType === 'signup' ? (
                        <div>
                            <div className={classNames(styles.FormRow)}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Password again"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                    className={classNames(styles.Inputpw)}
                                />
                                <button onClick={togglePasswordVisibility} className={styles.ButtonSee}>
                                    {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
                                </button>
                            </div>
                            <div className={classNames(styles.FormRow)}>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div>{formik.errors.confirmPassword}</div>
                                ) : null}
                            </div>
                        </div>
                    ) : null}

                    <div className={classNames(styles.FormRow)}>
                        <button type="submit" className={styles.ButtonSubmit}>
                            {titlecard}
                        </button>
                     </div>
                    <div className={classNames(styles.FormRowSmall)}>{linkresetpw}</div>
                    <div className={classNames(styles.FormRowSmall)}> </div>
                </form>
            </div>
        </div>
    );
};
