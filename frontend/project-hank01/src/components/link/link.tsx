import classNames from 'classnames';
import styles from './link.module.scss';

export interface LinkProps {
    className?: string;
    children?:JSX.Element | Array<JSX.Element|string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Link = ({ className , children }: LinkProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <a href="/">{ children }</a>
         
        </div>
    );
};
