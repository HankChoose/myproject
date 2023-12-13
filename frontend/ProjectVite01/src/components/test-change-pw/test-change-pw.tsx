import classNames from 'classnames';
import styles from './test-change-pw.module.scss';

export interface TestChangePWProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestChangePW = ({ className }: TestChangePWProps) => {
    return <div className={classNames(styles.root, className)}>TestChangePW</div>;
};
