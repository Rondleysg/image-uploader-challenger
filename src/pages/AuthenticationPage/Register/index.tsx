import style from "./register.module.scss";
import { ReactComponent as LogoDevChallenges } from "../../../assets/imgs/devchallenges.svg";
import SocialProfile from "../../../components/SocialProfile";
import FormAuthentication from "../FormAuthentication";
import { useState } from "react";
import createUser from "../../../services/ws/user/CreateUser";
import IUser from "../../../interfaces/IUser";

interface RegisterProps {
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
    setSigned: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const Register = ({ setCurrentTab, setSigned, setUser }: RegisterProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msgError, setMsgError] = useState("");

    function onClickLink(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setCurrentTab("loginTab");
    }

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const result = await createUser(email, password);
        if (typeof result === "string") {
            setMsgError(result);
        } else {
            setUser(result);
            setSigned(true);
            localStorage.setItem("user", JSON.stringify(result));
        }
    }

    return (
        <div className={style.registerTab}>
            <LogoDevChallenges />
            <h1>Join thousands of learners from around the world</h1>
            <h3>
                Master web development by making real-life projects. There are multiple paths for
                you to choose
            </h3>
            {msgError ? <h4 className={style.msgError}>{msgError}</h4> : ""}
            <FormAuthentication
                onSubmit={onSubmit}
                setEmail={setEmail}
                setPassword={setPassword}
                textButton="Start coding now"
            />
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
