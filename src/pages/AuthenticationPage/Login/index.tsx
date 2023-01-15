import style from "./Login.module.scss";
import { ReactComponent as LogoDevChallenges } from "../../../assets/imgs/authenticationPage/devchallenges.svg";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import SocialProfile from "../../../components/SocialProfile";

interface LoginProps {
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const Login = ({ setCurrentTab }: LoginProps) => {
    function onClickLink(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setCurrentTab("registerTab");
    }

    return (
        <div className={style.LoginTab}>
            <LogoDevChallenges />
            <h1>Login</h1>
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
                    Login
                </Button>
            </form>
            <SocialProfile>
                Don’t have an account yet?{" "}
                <a onClick={onClickLink} href="/">
                    Register
                </a>
            </SocialProfile>
        </div>
    );
};

export default Login;
