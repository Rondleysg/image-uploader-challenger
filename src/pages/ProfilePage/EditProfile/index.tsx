import Button from "../../../components/Button";
import style from "./editProfile.module.scss";
import InputEditProfile from "./InputEditProfile";

const EditProfile = () => {
    return (
        <div className={style.editProfile}>
            <div>
                <h1>Change Info</h1>
                <h3>Changes will be reflected to every services</h3>
            </div>
            <div className={style.itemEditProfile}>
                <div
                    className={style.img}
                    style={{
                        backgroundImage: `url(
                            "https://img.freepik.com/vetores-premium/icone-do-usuario-simbolo-da-pessoa-humana-icone-de-perfil-social-sinal-de-login-do-avatar-simbolo-do-usuario-da-web-botao-da-web-da-interface-de-usuario-branco-neumorphic-ui-ux-neumorfismo-vetor-eps-10_399089-2757.jpg?w=250"
                        )`,
                    }}
                >
                    <span className="material-symbols-outlined" style={{ color: "#fff" }}>
                        photo_camera
                    </span>
                </div>
                <button>Change Photo</button>
            </div>
            <InputEditProfile type="text" keyInput="Name" placeholder="Enter your name..." />
            <InputEditProfile type="text" keyInput="Bio" placeholder="Enter your bio..." />
            <InputEditProfile type="tel" keyInput="Phone" placeholder="Enter your phone..." />
            <InputEditProfile type="email" keyInput="Email" placeholder="Enter your email..." />
            <InputEditProfile
                type="password"
                keyInput="Password"
                placeholder="Enter your new password..."
            />
            <Button className="btn-save-editProfile" btnFor="">
                Save
            </Button>
        </div>
    );
};

export default EditProfile;
