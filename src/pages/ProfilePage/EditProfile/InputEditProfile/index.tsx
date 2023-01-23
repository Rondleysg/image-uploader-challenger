import classNames from "classnames";
import style from "./InputEditProfile.module.scss";

interface InputEditProfileProps {
    keyInput: string;
    placeholder: string;
    type: string;
}

const InputEditProfile = ({ keyInput, placeholder, type }: InputEditProfileProps) => {
    return (
        <label className={classNames(style.label)}>
            {keyInput}
            <input
                className={style.input}
                style={keyInput === "Bio" ? { height: "50px" } : {}}
                type={type}
                placeholder={placeholder}
            />
        </label>
    );
};

export default InputEditProfile;
