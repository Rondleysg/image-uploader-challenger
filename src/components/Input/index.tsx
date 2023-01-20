import style from "./input.module.scss";

interface InputProps {
    type: string;
    placeHolder: string;
    id: string;
    children?: React.ReactNode;
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeHolder, id, children, required, onChange }: InputProps) => {
    return (
        <label htmlFor={id} className={style.label}>
            {children}
            <input
                required={required}
                className={style.input}
                id={id}
                type={type}
                placeholder={placeHolder}
                onChange={onChange}
            />
        </label>
    );
};

export default Input;
