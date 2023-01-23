import style from "./authenticationPage.module.scss";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import FooterAuthentication from "./FooterAuthentication";

const AuthenticationPage = () => {
    const [currentTab, setCurrentTab] = useState("loginTab");
    return (
        <div className={style.authenticationPage}>
            {currentTab === "loginTab" ? (
                <Login setCurrentTab={setCurrentTab} />
            ) : (
                <Register setCurrentTab={setCurrentTab} />
            )}
            <FooterAuthentication />
        </div>
    );
};

export default AuthenticationPage;
