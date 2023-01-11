import "./Button.css";

interface ButtonProps {
    children: React.ReactNode;
    btnFor: string;
    classNames?: string;
}

const Button = ({ children, btnFor, classNames }: ButtonProps) => {
    return (
        <div>
            <label className={`btn ${classNames}`} htmlFor={btnFor}>
                {children}
            </label>
        </div>
    );
};

export default Button;
