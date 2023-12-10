import classNames from 'classnames';
import styles from './user-apply-4.module.scss';

export interface UserApply4Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApply4 = ({ className }: UserApply4Props) => {
    return <div className={classNames(styles.root, className)}>UserApply4</div>;
};
