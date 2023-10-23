import classNames from 'classnames';
import styles from './form-card.module.scss';
import { FormRow } from '../form-row/form-row';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { Button } from '../button/button';
import React, { useRef, useState, Component} from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

export interface FormCardProps {
    className?: string;
    children?: React.ReactNode;
    formType?: 'signin' | 'signup';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const FormCard = ({ className, formType = 'signin', children }: FormCardProps) => {
    const [inputValue, setInputValue] = useState('');
   
    const handleSignin = () => {
        // 在链接被点击时修改input的值
        setInputValue('signin');
    };
    const handleSignup = () => {
        // 在链接被点击时修改input的值
        setInputValue('signup');
    };

    const handleResetpw = () => {
        // 在链接被点击时修改input的值
        setInputValue('resetpw');
    };
    const linkresetpw =
        formType === 'signin' ? <a id="resetpw"  onClick={handleResetpw} >Forgot my password</a> : formType === 'signup' ? <span/> : <span/> ;
    const linksign =
        formType === 'signin' ? <a id="linksignup"  onClick={handleSignup}>Sign Up</a> : formType === 'signup' ? <a id="linksignin"   onClick={handleSignin}>Sign In</a> : <span/> ;
    const titlecard =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : <span/>;
    const MyContext = React.createContext("Default Value");
    return (
        <div className={classNames(styles.root, className)}>

            <input type="text" value={inputValue} readOnly />
            {children}
            <h1>{titlecard }</h1>
            <MyContext.Consumer>
            {value => <div>{value}</div>}
            </MyContext.Consumer>
            {linksign}
            <FormRow />
            <FormRow children={<Input />} />
            <FormRow />
            <Inputpw />
            { linkresetpw } 
            <FormRow />
            <FormRow children={<Button> {titlecard } </Button>} />
            <FormRow />
           
        </div>
    );
};