import style from "./editProfile.module.scss";

const EditProfile = () => {
    return (
        <div>
            <div className={style.editProfile}>
                <h1>Change Info</h1>
                <h3>Changes will be reflected to every services</h3>
            </div>
            <div>
                <img
                    src="https://img.freepik.com/vetores-premium/icone-do-usuario-simbolo-da-pessoa-humana-icone-de-perfil-social-sinal-de-login-do-avatar-simbolo-do-usuario-da-web-botao-da-web-da-interface-de-usuario-branco-neumorphic-ui-ux-neumorfismo-vetor-eps-10_399089-2757.jpg?w=250"
                    alt="imagem profile"
                />
                <h6>Change Photo</h6>
            </div>
        </div>
    );
};

export default EditProfile;
