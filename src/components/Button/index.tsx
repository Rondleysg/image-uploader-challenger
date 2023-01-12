import "./Button.scss";

interface ButtonProps {
    children: React.ReactNode;
    btnFor: string;
    classNames?: string;
}

const Button = ({ children, btnFor, classNames }: ButtonProps) => {
    return (
        <label className={`btn ${classNames}`} htmlFor={btnFor}>
            {children}
        </label>
    );
};

export default Button;
