import classNames from 'classnames';
import styles from './register-form.module.scss';
import { Input } from '../input/input';
import Input_module from '../input/input.module.scss';
import { Inputpw } from '../inputpw/inputpw';

export interface RegisterFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const RegisterForm = ({ className }: RegisterFormProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            RegisterForm
            <Input className={Input_module.input} />
            <Input className={Input_module.input} />
            <Inputpw />
        </div>
    );
};
