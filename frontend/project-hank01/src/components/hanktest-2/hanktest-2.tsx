import classNames from 'classnames';
import styles from './hanktest-2.module.scss';

export interface Hanktest2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Hanktest2 = ({ className }: Hanktest2Props) => {
    return <div className={classNames(styles.root, className)}>Hanktest2</div>;
};
