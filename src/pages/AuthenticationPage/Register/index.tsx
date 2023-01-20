import style from "./register.module.scss";
import { ReactComponent as LogoDevChallenges } from "../../../assets/imgs/devchallenges.svg";
import SocialProfile from "../../../components/SocialProfile";
import FormAuthentication from "../FormAuthentication";

interface RegisterProps {
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const Register = ({ setCurrentTab }: RegisterProps) => {
    function onClickLink(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setCurrentTab("loginTab");
    }

    return (
        <div className={style.registerTab}>
            <LogoDevChallenges />
            <h1>Join thousands of learners from around the world</h1>
            <h3>
                Master web development by making real-life projects. There are multiple paths for
                you to choose
            </h3>
            <FormAuthentication textButton="Start coding now" />
            <SocialProfile>
                Adready a member?{" "}
                <a onClick={onClickLink} href="/">
                    Login
                </a>
            </SocialProfile>
        </div>
    );
};

export default Register;
