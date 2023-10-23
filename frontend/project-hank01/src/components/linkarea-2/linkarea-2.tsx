import classNames from 'classnames';
import styles from './linkarea-2.module.scss';
import { FormCard } from '../form-card/form-card';
import React, { useRef, useState, Component } from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export interface Linkarea2Props {
    className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Linkarea2 = ({ className }: Linkarea2Props) => {
   
    return (
        <div className={classNames(styles.root, className)}>
            <Router>
                <div>
                    <Link to="/*">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/resetpw">Reset password</Link>
                    <Routes>
                        <Route path="/*" element={<FormCard formType="signin" />} />
                        <Route path="/signup" element={<FormCard formType="signup" />} />
                        <Route index element={<FormCard formType="signin" />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};
