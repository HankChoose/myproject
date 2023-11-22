import classNames from 'classnames';
import styles from './user-profile.module.scss';

export interface UserProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserProfile = ({ className }: UserProfileProps) => {
    return <div className={classNames(styles.root, className)}>UserProfile</div>;
};
