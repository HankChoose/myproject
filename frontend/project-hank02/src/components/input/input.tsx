import { st, classes } from './input.st.css';

export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Input = ({ className }: InputProps) => {
    return <div className={st(classes.root, className)}>
        <input placeholder="Email"></input>
        </div>;
};
