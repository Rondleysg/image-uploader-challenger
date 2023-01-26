import Button from "../../../components/Button";
import style from "./editProfile.module.scss";
import InputEditProfile from "./InputEditProfile";
import IUser from "../../../interfaces/IUser";
import { useState } from "react";
import editUser from "../../../services/ws/user/EditUser";
import editPhotoUser from "../../../services/ws/user/EditPhotoUser";

interface EditProfileProps {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const EditProfile = ({ user, setUser }: EditProfileProps) => {
    const [newUser, setNewUser] = useState<IUser>({ ...user });
    const [msgError, setMsgError] = useState("");
    const [newPassword, setNewPassword] = useState("");

    async function onChangePhoto(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        const img = event.target.files![0];
        const result = await editPhotoUser(user, img);
        if (result.startsWith("https")) {
            setUser({ ...user, profilePicture: result });
            localStorage.setItem("token", newUser.token);
            window.location.reload();
        } else {
            setMsgError(result);
        }
    }

    async function onSubmit() {
        const result = await editUser(newUser, user, newPassword);
        setMsgError(result);
        setUser(newUser);
        localStorage.setItem("token", JSON.stringify(newUser.token));
        window.location.reload();
    }

    return (
        <div className={style.editProfile}>
            <div>
                <h1>Change Info</h1>
                <h3>Changes will be reflected to every services</h3>
                {msgError ? <h4 className={style.msgError}>{msgError}</h4> : ""}
            </div>
            <div className={style.itemEditProfile}>
                <div
                    className={style.img}
                    style={{
                        backgroundImage: `url(
                            "${newUser.profilePicture}"
                        )`,
                    }}
                >
                    <span className="material-symbols-outlined" style={{ color: "#fff" }}>
                        photo_camera
                    </span>
                </div>
                <input
                    onChange={onChangePhoto}
                    type="file"
                    accept="image/*"
                    id="imgUser-input"
                    hidden
                />
                <label htmlFor="imgUser-input">Change Photo</label>
            </div>
            <InputEditProfile
                value={newUser.username}
                onChange={(event) => {
                    setNewUser({ ...newUser, username: event.target.value });
                }}
                type="text"
                keyInput="Name"
                placeholder="Enter your name..."
            />
            <InputEditProfile
                value={newUser.bio}
                onChange={(event) => {
                    setNewUser({ ...newUser, bio: event.target.value });
                }}
                type="text"
                keyInput="Bio"
                placeholder="Enter your bio..."
            />
            <InputEditProfile
                value={newUser.phone}
                onChange={(event) => {
                    setNewUser({ ...newUser, phone: event.target.value });
                }}
                type="tel"
                keyInput="Phone"
                placeholder="Enter your phone..."
            />
            <InputEditProfile
                value={newUser.email}
                onChange={(event) => {
                    setNewUser({ ...newUser, email: event.target.value });
                }}
                type="email"
                keyInput="Email"
                placeholder="Enter your email..."
            />
            <InputEditProfile
                onChange={(event) => {
                    setNewPassword(event.target.value);
                }}
                type="password"
                keyInput="Password"
                placeholder="Enter your new password..."
            />
            <Button onClick={onSubmit} className="btn-save-editProfile" btnFor="">
                Save
            </Button>
        </div>
    );
};

export default EditProfile;
