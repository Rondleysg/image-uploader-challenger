import classNames from "classnames";
import style from "./button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    btnFor: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ children, btnFor, className, onClick }: ButtonProps) => {
    return (
        <label
            className={classNames(style.btn, { [style[`${className}`]]: !!className })}
            htmlFor={btnFor}
            onClick={onClick}
        >
            {children}
        </label>
    );
};

export default Button;
