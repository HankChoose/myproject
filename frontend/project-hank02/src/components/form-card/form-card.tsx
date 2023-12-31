import { st, classes } from './form-card.st.css';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { Button } from '../button/button';
import React from 'react';

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
    const linkresetpw =
        formType === 'signin' ? <a id="resetpw" >Forgot my password</a> : formType === 'signup' ? <span/> : <span/> ;
    const linksign =
        formType === 'signin' ? <a id="linksignup" href="/signup" >Sign Up</a> : formType === 'signup' ? <a id="linksignin" href="/signin">Sign In</a> : <span/> ;
    const titlecard =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : <span/>;
    
    return <div className={st(classes.root, className)}>
        {children}
        { linksign }
        <h1>{titlecard }</h1>
        <a id="linksignin" href="/signin" >Sign In 1111 </a>
        <Input />
        <a id="linksignin" href="/signup" >Sign Up 2222</a>
        <Inputpw />
        { linkresetpw } 
        <Button> {titlecard } </Button>
    </div>;
};
