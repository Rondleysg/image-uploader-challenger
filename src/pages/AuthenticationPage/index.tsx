import style from "./authenticationPage.module.scss";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import FooterAuthentication from "./FooterAuthentication";
import IUser from "../../interfaces/IUser";

interface AuthenticationPageProps {
    setSigned: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AuthenticationPage = ({ setSigned, setUser }: AuthenticationPageProps) => {
    const [currentTab, setCurrentTab] = useState("loginTab");

    return (
        <div className={style.authenticationPage}>
            {currentTab === "loginTab" ? (
                <Login setUser={setUser} setSigned={setSigned} setCurrentTab={setCurrentTab} />
            ) : (
                <Register setUser={setUser} setSigned={setSigned} setCurrentTab={setCurrentTab} />
            )}
            <FooterAuthentication />
        </div>
    );
};

export default AuthenticationPage;
