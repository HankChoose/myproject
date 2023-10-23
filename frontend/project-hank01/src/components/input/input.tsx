import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Input = ({ className, id, name }: InputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.Input} placeholder="Email"></input>
        </div>
    );
};
