import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./userInfo.module.scss";

interface UserInfoProps {
    currentTabProfile: string;
}

const UserInfo = ({ currentTabProfile }: UserInfoProps) => {
    const [dropDownActive, setDropDownActive] = useState(false);

    return (
        <div
            onClick={(event) => setDropDownActive(!dropDownActive)}
            className={classNames(style.divFlexCenter, style.userInfos)}
        >
            <img
                src="https://img.freepik.com/vetores-premium/icone-do-usuario-simbolo-da-pessoa-humana-icone-de-perfil-social-sinal-de-login-do-avatar-simbolo-do-usuario-da-web-botao-da-web-da-interface-de-usuario-branco-neumorphic-ui-ux-neumorfismo-vetor-eps-10_399089-2757.jpg?w=250"
                alt="img of profile"
            />
            <h2>Xanthe Neal</h2>
            {dropDownActive ? (
                <span className="material-symbols-outlined">arrow_drop_up</span>
            ) : (
                <span className="material-symbols-outlined">arrow_drop_down</span>
            )}
            {dropDownActive ? (
                <div className={style.menuUserInfos}>
                    <div>
                        <Link to="/profile">
                            <div
                                className={classNames(style.optionMenu, {
                                    [style["inUse"]]: currentTabProfile,
                                })}
                            >
                                <span
                                    className={classNames(
                                        "material-symbols-outlined",
                                        style.spanProfile
                                    )}
                                >
                                    person
                                </span>
                                <h4>My Profile</h4>
                            </div>
                        </Link>
                        <div className={style.optionMenu}>
                            <span className="material-symbols-outlined">group</span>
                            <h4>Group Chat</h4>
                        </div>
                        <div className={style.line}></div>
                        <div className={style.optionMenu}>
                            <span className={classNames("material-symbols-outlined", style.logout)}>
                                logout
                            </span>
                            <h4 className={style.logout}>Logout</h4>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default UserInfo;
