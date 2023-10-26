import classNames from 'classnames';
import styles from './form-card.module.scss';
import { FormRow } from '../form-row/form-row';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { Button } from '../button/button';
import React, { useRef, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export interface FormCardProps {
    className?: string;
    children?: React.ReactNode;
    formType?: 'signin' | 'signup';
    callbackFunction?: (data: string) => void; // 定义回调函数类型
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const FormCard = ({ className, formType = 'signin', children, callbackFunction }: FormCardProps) => {
    const handleClickSignup = () => {
        const valueToSend = 'signup';
        callbackFunction(valueToSend);
    };

    const handleClickSignin = () => {
        const valueToSend = 'signin';
        callbackFunction(valueToSend);
    };

    const handleClickResetpw = () => {
        const valueToSend = 'resetpw';
        callbackFunction(valueToSend);
    };


    const linkresetpw =
        formType === 'signin' ? (
            <a onClick={handleClickResetpw}>Forgot my password</a>
        ) : (<span />
        );
    const linkheader =
        formType === 'signin' ? (
            <span>Need an account?</span>
        ) : formType === 'signup' ? (
            <span>Have an account already?</span>
        ) : (
            <span />
        );
    const linksign =
        formType === 'signin' ? (
            <a onClick={handleClickSignup}> Sign Up </a>
        ) : formType === 'signup' ? (
            <a onClick={handleClickSignin}> Sign In </a>
        ) : (
            <span />
        );
    const titlecard =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : <span />;

    return (
        <div className={classNames(styles.root, className)}>
            {children}
            <h1>{titlecard}</h1>
            {linkheader}<span className={styles.handpoint}>{linksign}</span>
            <FormRow />
            <FormRow children={<Input />} />
            <FormRow />
            <Inputpw />
            {linkresetpw}
            <FormRow />
            <FormRow children={<Button> {titlecard} </Button>} />
            <FormRow />

        </div>
    );
};