import style from "./authenticationPage.module.scss";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import FooterAuthentication from "./FooterAuthentication";

const TabComponentAuthentication = () => {
    const [currentTab, setCurrentTab] = useState("loginTab");
    return (
        <div className={style.AuthenticationPage}>
            {currentTab === "loginTab" ? <Login setCurrentTab={setCurrentTab} /> : <Register />}
            <FooterAuthentication />
        </div>
    );
};

export default TabComponentAuthentication;
