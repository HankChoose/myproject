import classNames from 'classnames';
import styles from './page-1.module.scss';
import { Link } from 'react-router-dom';

const Page1 = ({ className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Component-page1</h1>
            <Link to="/react/page1/test1">Test1</Link>
            <Link to="/react/page1/test2">Test2</Link>
        </div>
    );
};

export default Page1;
