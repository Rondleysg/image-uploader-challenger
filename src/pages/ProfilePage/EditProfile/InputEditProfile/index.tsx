import classNames from "classnames";
import style from "./InputEditProfile.module.scss";

interface InputEditProfileProps {
    keyInput: string;
    placeholder: string;
    type: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputEditProfile = ({
    keyInput,
    placeholder,
    type,
    value,
    onChange,
}: InputEditProfileProps) => {
    return (
        <label className={classNames(style.label)}>
            {keyInput}
            <input
                value={value}
                onChange={onChange}
                className={style.input}
                style={keyInput === "Bio" ? { height: "50px" } : {}}
                type={type}
                placeholder={placeholder}
            />
        </label>
    );
};

export default InputEditProfile;
