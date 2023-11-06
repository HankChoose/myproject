import classNames from 'classnames';
import styles from './App.module.scss';
import { SignArea } from './components/sign-area/sign-area';
import { UserApplyArea } from './components/user-apply-area/user-apply-area';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
function App() {

    return (
      
        <div className={styles.App}>
          <Router>
            <Routes>
              <Route path="/react/signarea" element={<SignArea />} />
              <Route path="/react/userapplyarea" element={<UserApplyArea />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;