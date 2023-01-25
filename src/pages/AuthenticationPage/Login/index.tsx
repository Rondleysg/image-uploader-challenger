import style from "./login.module.scss";
import { ReactComponent as LogoDevChallenges } from "../../../assets/imgs/devchallenges.svg";
import SocialProfile from "../../../components/SocialProfile";
import FormAuthentication from "../FormAuthentication";
import { useState } from "react";
import IUser from "../../../interfaces/IUser";
import loginUser from "../../../services/ws/user/LoginUser";

interface LoginProps {
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
    setSigned: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const Login = ({ setCurrentTab, setSigned, setUser }: LoginProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgError, setMsgError] = useState("");

    function onClickLink(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setCurrentTab("registerTab");
    }

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const result = await loginUser(email, password);
        if (typeof result === "string") {
            setMsgError(result);
        } else {
            setUser(result);
            setSigned(true);
            localStorage.setItem("user", JSON.stringify(result));
            window.location.replace("/");
        }
    }

    return (
        <div className={style.LoginTab}>
            <LogoDevChallenges />
            <h1>Login</h1>
            {msgError ? <h5 className={style.msgError}>{msgError}</h5> : ""}
            <FormAuthentication
                onSubmit={onSubmit}
                setEmail={setEmail}
                setPassword={setPassword}
                textButton="Login"
            />
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
