import { useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import { FormCard } from './components/form-card/form-card';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Resetpw } from './components/resetpw/resetpw';
import React from 'react'

function GotoSignup() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/signup'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
    <div></div>
  );
}
function GotoSignin() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/signin'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
     <div></div>
    );

}

function GotoResetpw() {
    const navigate = useNavigate(); // 在<Router>组件内使用useNavigate
    React.useEffect(() => {
        navigate('/resetpw'); // 在 useEffect 中调用 navigate
    }, []); // 空数组表示只在组件挂载时调用一次
    return (
    <div></div>
    );
}


function App() {
    const [isInternalControlClicked, setInternalControlClicked] = useState('');
    const handleInternalControlClick = (value: string) => {
        // 当内部控件被点击时，更新状态变量
        setInternalControlClicked(value);
    };

    return (
        <div className={styles.App}>
           
            <Router>
                {isInternalControlClicked === "signup" ? <GotoSignup /> : <GotoSignin />}
                {isInternalControlClicked === "signin" ? <GotoSignin /> : null}
                {isInternalControlClicked === "resetpw" ? <GotoResetpw /> : <GotoSignin />}
                <div>
                    <Routes>
                        <Route
                            path="/signin"
                            element={
                                <FormCard
                                    formType="signin"
                                    callbackFunction={handleInternalControlClick}
                                />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <FormCard
                                    formType="signup"
                                    callbackFunction={handleInternalControlClick}
                                />
                            }
                        />

                         <Route
                            path="/resetpw"
                           element={
                                <FormCard
                                    formType="resetpw"
                                    callbackFunction={handleInternalControlClick}
                                />
                            }
                        />
                        <Route
                            index
                            element={
                                <FormCard
                                    formType="signin"
                                    callbackFunction={handleInternalControlClick}
                                />
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
