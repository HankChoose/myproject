import classNames from 'classnames';
import styles from './page-2.module.scss';
import { Link, Outlet } from 'react-router-dom';

const Page2 = ({ className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Component-page2</h1>
            <Link to="/react/page2/test3">Test3</Link>
            <Link to="/react/page2/test4">Test4</Link>
            <Outlet />
        </div>
    );
};

export default Page2;
