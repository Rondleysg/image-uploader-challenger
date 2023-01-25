import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import style from "./formAuthentication.module.scss";

interface FormAuthenticationProps {
    textButton: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {};
}

const FormAuthentication = ({
    textButton,
    setEmail,
    setPassword,
    onSubmit,
}: FormAuthenticationProps) => {
    return (
        <form className={style.form} onSubmit={onSubmit}>
            <Input
                onChange={(event) => setEmail(event.target.value)}
                id="emailInputLogin"
                type="email"
                placeHolder="Email"
            >
                <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px", color: "#828282" }}
                >
                    mail
                </span>
            </Input>
            <Input
                onChange={(event) => setPassword(event.target.value)}
                id="passwordInputLogin"
                type="password"
                placeHolder="Password"
            >
                <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px", color: "#828282" }}
                >
                    lock
                </span>
            </Input>
            <input id="submitLogin" type="submit" hidden />
            <Button className="btn-submit-login" btnFor="submitLogin">
                {textButton}
            </Button>
        </form>
    );
};

export default FormAuthentication;
