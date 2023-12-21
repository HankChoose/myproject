import classNames from 'classnames';
import styles from './user-apply.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useRef, useState, Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "../../actions/userInfoActions";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import {baseUrl} from '../../constants';
import Form from 'react-bootstrap/Form';
import Modal from 'react-modal';

export interface UserApplyProps {
    className?: string;
    //callbackFunction?: (data: string) => void; // 定义回调函数类型
}

type RootState = {
    userInfo: {
        name: string;
        email: string;
    };
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply = ({ className }: UserApplyProps) => {

    const userInfo = useSelector((state: RootState) => state.userInfo);
    const dispatch = useDispatch();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogin = () => {
        // 处理登录逻辑
        console.log('处理登录逻辑');
        // 在登录成功后，关闭模态框
        closeModal();
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateName(e.target.value));
        console.log("Name is:", e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail(e.target.value));
        console.log("Email is:", e.target.value);
    };

    const handleSubmission = () => {
        console.log("userInfo:", userInfo);
    };


    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.flowImage)}></div>
        <div className={classNames(styles.FormRow)}></div>
        <div className={styles.FromArea}> 
            <div className={classNames(styles.FormRow)}>
                <Form.Control type="text"  placeholder="Name" value={userInfo.name} onChange={handleNameChange} /> 
            </div>
            <div className={classNames(styles.FormRow)}></div>
            <div className={classNames(styles.FormRow)}></div>
             
            <div className={classNames(styles.FormRow)}>
                <Form.Control type="text" placeholder="Email" value={userInfo.email} onChange={handleEmailChange} />
            </div>
            <div className={classNames(styles.FormRow)}></div>
            <div className={classNames(styles.FormRow)}></div>
            <div className={classNames(styles.FormRow)}>
            <Link to="/react/userapply2"><Button variant="primary">Next page</Button>{' '}</Link>
            <a href="https://zhiyouyuec.com"><Button variant="primary">Cancel</Button></a>   
            </div>
        </div>
         <div>
      <button onClick={openModal}>提交需求</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="登录模态框"
        >
            <h2>登录</h2>
            {/* 添加你的登录表单和逻辑 */}
            <form>
            {/* 输入用户名和密码的表单元素 */}
            <label>
                用户名:
                <input type="text" />
            </label>
            <label>
                密码:
                <input type="password" />
            </label>
            {/* 登录按钮 */}
            <button onClick={handleLogin}>登录</button>
            </form>
        </Modal>
        </div>
    </div>;
};
