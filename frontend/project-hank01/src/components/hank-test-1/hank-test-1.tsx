import classNames from 'classnames';
import styles from './hank-test-1.module.scss';
import { AiFillAlert } from 'react-icons/ai';
import { Button, Progress } from 'antd';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
export interface HankTest1Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HankTest1 = ({ className }: HankTest1Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            HankTest1
        
            <RxEyeOpen />
            <RxEyeClosed />
        </div>
    );
};
