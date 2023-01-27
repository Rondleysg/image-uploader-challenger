import Button from "../../components/Button";
import HeaderProfilePage from "./Header";
import ItemInfoProfile from "./ItemInfoProfile";
import Line from "./Line";
import style from "./profilePage.module.scss";
import { useState } from "react";
import EditProfile from "./EditProfile";
import classNames from "classnames";
import useUser from "../../hooks/User/useUser";

const ProfilePage = () => {
    const [currentTabProfile, setCurrentTabProfile] = useState("profile");
    const { user, setUser } = useUser();
    if (!user) {
        return <></>;
    }

    return (
        <div
            className={classNames({
                [style.profilePage]: currentTabProfile === "profile",
                [style.editProfile]: currentTabProfile === "edit",
            })}
        >
            <HeaderProfilePage currentTabProfile={currentTabProfile} />
            {currentTabProfile === "profile" ? (
                <div>
                    <div className={style.pageContent}>
                        <div className={style.titles}>
                            <h1>Personal info</h1>
                            <h2>Basic info, like your name and photo</h2>
                        </div>
                        <div className={style.profileContent}>
                            <div className={style.rowProfile}>
                                <div>
                                    <h3>Profile</h3>
                                    <p>Some info may be visible to other people</p>
                                </div>
                                <Button
                                    onClick={() => setCurrentTabProfile("edit")}
                                    className="btn-profile-page"
                                    btnFor=""
                                >
                                    Edit
                                </Button>
                            </div>
                            <Line />
                            <ItemInfoProfile line keyItem="photo">
                                <img src={user.profilePicture} alt="imagem profile" />
                            </ItemInfoProfile>
                            <ItemInfoProfile line keyItem="name" value={user.username} />
                            <ItemInfoProfile line keyItem="bio" value={user.bio} />
                            <ItemInfoProfile line keyItem="phone" value={user.phone} />
                            <ItemInfoProfile line keyItem="email" value={user.email} />
                            <ItemInfoProfile keyItem="password" value="**********" />
                        </div>
                        <div className={style.footer}>
                            <h2>
                                Created by <b>Rondley</b>
                            </h2>
                            <h2>devChallenges.io</h2>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={style.pageContentProfile}>
                    <div className={style.editProfileContent}>
                        <button
                            onClick={() => {
                                setCurrentTabProfile("profile");
                            }}
                        >{`< Back`}</button>
                        <div className={style.editProfileContent}>
                            <EditProfile setUser={setUser} user={user} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
