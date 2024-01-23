import classNames from 'classnames';
import styles from './ask-info.module.scss';

import { useFormik, FormikValues,Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { axios_form_data_post, axios_json_data_post, axios_json_data_get } from '../../apiService';

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
            //handleSignUp(values);
        },
    });

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
                                value={formik.values.username}
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
                                value={formik.values.email}
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
                                cols={42}
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
