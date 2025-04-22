import classNames from 'classnames';
import styles from './home.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const Home = ({ className }) => {
  return <div className={classNames(styles.root, className)}>Home</div>;
};

export default Home;
