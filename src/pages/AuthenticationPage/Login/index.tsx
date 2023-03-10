import style from "./login.module.scss";
import { ReactComponent as LogoDevChallenges } from "../../../assets/imgs/devchallenges.svg";
import SocialProfile from "../../../components/SocialProfile";
import FormAuthentication from "../FormAuthentication";
import { useState } from "react";
import loginUser from "../../../services/ws/user/LoginUser";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/User/useUser";
import useCookies from "../../../hooks/Cookies/useCookies";

interface LoginProps {
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
    setSigned: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setCurrentTab, setSigned }: LoginProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgError, setMsgError] = useState("");
    const navigate = useNavigate();
    const { setUser } = useUser();
    const cookies = useCookies();

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
            cookies.set("token", result.token);
            navigate("/");
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
