import classNames from "classnames";
import style from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    btnFor: string;
    className?: string;
}

const Button = ({ children, btnFor, className = "" }: ButtonProps) => {
    return (
        <label
            className={classNames({ [style.btn]: true, [style[className]]: className !== "" })}
            htmlFor={btnFor}
        >
            {children}
        </label>
    );
};

export default Button;
