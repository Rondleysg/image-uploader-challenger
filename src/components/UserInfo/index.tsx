import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./userInfo.module.scss";
import IUser from "../../interfaces/IUser";

interface UserInfoProps {
    currentTabProfile: string;
    user: IUser;
}

const UserInfo = ({ currentTabProfile, user }: UserInfoProps) => {
    const [dropDownActive, setDropDownActive] = useState(false);
    return (
        <div
            onClick={(event) => setDropDownActive(!dropDownActive)}
            className={classNames(style.divFlexCenter, style.userInfos)}
        >
            <img src={user.profilePicture} alt="img of profile" />
            <h2>{user.username}</h2>
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
