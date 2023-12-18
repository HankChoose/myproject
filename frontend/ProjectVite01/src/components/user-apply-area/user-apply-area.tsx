import classNames from 'classnames';
import styles from './user-apply-area.module.scss';

export interface UserApplyAreaProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserApplyArea = ({ className }: UserApplyAreaProps) => {
    return <div className={classNames(styles.root, className)}>UserApplyArea</div>;
};
