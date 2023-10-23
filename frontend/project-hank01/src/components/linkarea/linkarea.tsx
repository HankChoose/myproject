import classNames from 'classnames';
import styles from './linkarea.module.scss';
import { FormCard } from '../../components/form-card/form-card';
import React from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Hanktest2 } from '../hanktest-2/hanktest-2';


export interface LinkareaProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Linkarea = ({ className }: LinkareaProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Router>
                <div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link to="/*" className="nav-link active" data-toggle="tab">
                                        Sign In
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link" data-toggle="tab">
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                        ></div>
                        <div
                            className="tab-pane fade"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                        ></div>
                    </div>
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
