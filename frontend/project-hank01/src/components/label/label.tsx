import classNames from 'classnames';
import styles from './label.module.scss';

export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element|String> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Label = ({ className,children }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label>{ children }</label>
        </div>
    );
};
