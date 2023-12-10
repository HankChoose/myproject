import classNames from 'classnames';
import styles from './user-apply-3.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useRef, useState, Component, ChangeEvent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateApplytype, updateRequirements } from "../../actions/userInfo2Actions";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {baseUrl} from '../../constants';
export interface UserApply3Props {
    className?: string;
    callbackFunction?: (data: string) => void; // 定义回调函数类型
}


type RootState = {
    userInfo: {
        name: string;
        email: string;
    };
};

type RootState2 = {
    userInfo2: {
        applytype: string;
        requirements: string;
    };
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply3 = ({ className }: UserApply3Props) => {
    const userInfo = useSelector((state:RootState) => state.userInfo);
    const userInfo2 = useSelector((state: RootState2) => state.userInfo2);
    const userInfoArray = [userInfo, userInfo2];
    console.log("userInfo-1:",userInfo);
    console.log("userInfo2-1:",userInfo2);
    console.log("userInfoArray-1:",userInfoArray);
    const dispatch = useDispatch();
   

    const handleApplytypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(updateApplytype(e.target.value));
        console.log("Applytype is:", e.target.value);
    }

    const handleRequirementsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateRequirements(e.target.value));
        console.log("Requirements is:", e.target.value);
    };

    const handleSubmission = () => {
        const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
        console.log("userInfo:",userInfo);
        console.log("userInfo2:",userInfo2);
        console.log("userInfoArray:",userInfoArray);
        //axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
        const csrftoken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrftoken='))?.split('=')[1];
        // Set the CSRF token in the headers of the Axios request
        axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
        axios.post("/create/", userInfoArray)
        .then(response => {
        // 处理成功响应
        })
        .catch(error => {
        // 处理错误
        });
    };

    
    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.flowImage3)}></div>
        <div className={styles.FromArea}>
            <div className={classNames(styles.FormRow)}> </div>
             <div className={classNames(styles.FormRow)}>
                <select value={userInfo2.applytype} className={classNames(styles.Input)} onChange={handleApplytypeChange}><option>Apple</option><option>Banana</option><option>Watermelon</option></select>
            </div>
            <div className={classNames(styles.FormRow)}> </div>
            <div className={classNames(styles.FormRow)}>
                <input type="text" className={classNames(styles.Input)} placeholder="Requirements" value={userInfo2.requirements} onChange={handleRequirementsChange} />
            </div>
            <div className={classNames(styles.FormRow)}> </div>
             <div className={classNames(styles.FormRow)}>  
                <Link to="/react/userapply"><Button variant="primary">Submit</Button></Link>
                <Link to="/react/userapply2"><Button variant="primary">Previous page</Button></Link>
               
            </div>         
          
        </div>

    </div>;
};