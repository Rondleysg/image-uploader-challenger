import style from "./Input.module.scss";

interface InputProps {
    type: string;
    placeHolder: string;
    id: string;
    children?: React.ReactNode;
}

const Input = ({ type, placeHolder, id, children }: InputProps) => {
    return (
        <label htmlFor={id} className={style.label}>
            {children}
            <input className={style.input} id={id} type={type} placeholder={placeHolder} />
        </label>
    );
};

export default Input;
