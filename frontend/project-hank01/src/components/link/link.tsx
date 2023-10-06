import classNames from 'classnames';
import styles from './link.module.scss';

export interface LinkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Link = ({ className }: LinkProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/">Register</a>
        </div>
    );
};
