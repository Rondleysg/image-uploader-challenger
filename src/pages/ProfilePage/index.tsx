import Button from "../../components/Button";
import HeaderProfilePage from "./Header";
import ItemInfoProfile from "./ItemInfoProfile";
import Line from "./Line";
import style from "./profilePage.module.scss";
import { useState } from "react";
import EditProfile from "./EditProfile";
import classNames from "classnames";

const ProfilePage = () => {
    const [currentTabProfile, setCurrentTabProfile] = useState("profile");

    return (
        <div className={classNames({ [style.profilePage]: currentTabProfile === "profile" })}>
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
                                <img
                                    src="https://img.freepik.com/vetores-premium/icone-do-usuario-simbolo-da-pessoa-humana-icone-de-perfil-social-sinal-de-login-do-avatar-simbolo-do-usuario-da-web-botao-da-web-da-interface-de-usuario-branco-neumorphic-ui-ux-neumorfismo-vetor-eps-10_399089-2757.jpg?w=250"
                                    alt="imagem profile"
                                />
                            </ItemInfoProfile>
                            <ItemInfoProfile line keyItem="name" value="Xanthe Neal" />
                            <ItemInfoProfile
                                line
                                keyItem="bio"
                                value="I am a software developer and a big fan of devchallenges..."
                            />
                            <ItemInfoProfile line keyItem="phone" value="908249274292" />
                            <ItemInfoProfile line keyItem="email" value="xanthe.neal@gmail.com" />
                            <ItemInfoProfile keyItem="password" value="************" />
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
                <div className={style.editProfile}>
                    <button
                        onClick={() => {
                            setCurrentTabProfile("profile");
                        }}
                    >{`< Back`}</button>
                    <div className={style.profileContent}>
                        <EditProfile />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
