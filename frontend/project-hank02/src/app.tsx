import type React from 'react';
import { st, classes } from './app.st.css';
import { FormCard } from './components/form-card/form-card';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export interface AppProps {
    className?: string;
}


export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
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
        </main>
    );
};
