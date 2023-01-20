import style from "./login.module.scss";
import { ReactComponent as LogoDevChallenges } from "../../../assets/imgs/devchallenges.svg";
import SocialProfile from "../../../components/SocialProfile";
import FormAuthentication from "../FormAuthentication";

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
            <FormAuthentication textButton="Login" />
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
