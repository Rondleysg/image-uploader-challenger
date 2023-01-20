import Button from "../../../components/Button";
import Input from "../../../components/Input";
import style from "./formAuthentication.module.scss";

interface FormAuthenticationProps {
    textButton: string;
}

const FormAuthentication = ({ textButton }: FormAuthenticationProps) => {
    return (
        <form className={style.form}>
            <Input id="emailInputLogin" type="email" placeHolder="Email">
                <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px", color: "#828282" }}
                >
                    mail
                </span>
            </Input>
            <Input id="passwordInputLogin" type="password" placeHolder="Password">
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
