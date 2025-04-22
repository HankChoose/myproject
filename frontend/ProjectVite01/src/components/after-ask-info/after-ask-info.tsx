import classNames from 'classnames';
import styles from './after-ask-info.module.scss';

export interface AfterAskInfoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AfterAskInfo = ({ className }: AfterAskInfoProps) => {
    return <div className={classNames(styles.root, className)}>AfterAskInfo</div>;
};
