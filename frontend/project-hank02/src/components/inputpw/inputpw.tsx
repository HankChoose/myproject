import { st, classes } from './inputpw.st.css';

export interface InputpwProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Inputpw = ({ className }: InputpwProps) => {
    return <div className={st(classes.root, className)}>
        <input type="password" /></div>;
};
