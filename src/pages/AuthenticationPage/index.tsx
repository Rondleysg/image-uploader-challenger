import style from "./authenticationPage.module.scss";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import FooterAuthentication from "./FooterAuthentication";

interface AuthenticationPageProps {
    setSigned: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthenticationPage = ({ setSigned }: AuthenticationPageProps) => {
    const [currentTab, setCurrentTab] = useState("loginTab");

    return (
        <div className={style.authenticationPage}>
            {currentTab === "loginTab" ? (
                <Login setSigned={setSigned} setCurrentTab={setCurrentTab} />
            ) : (
                <Register setSigned={setSigned} setCurrentTab={setCurrentTab} />
            )}
            <FooterAuthentication />
        </div>
    );
};

export default AuthenticationPage;
