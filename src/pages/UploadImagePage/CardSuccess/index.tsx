import classNames from "classnames";
import Button from "../../../components/Button";
import style from "./CardSuccess.module.scss";

interface CardSuccessProps {
    uploadedImage: string;
    onClose: () => void;
}

const CardSuccess = ({ uploadedImage, onClose }: CardSuccessProps) => {
    return (
        <div className={style.cardSuccess}>
            <span className="material-symbols-outlined">check_circle</span>
            <h1>Uploaded Successfully!</h1>
            <img src={uploadedImage} alt="img uploaded" />
            <span
                className={classNames(style.btnClose, "material-symbols-outlined")}
                onClick={onClose}
            >
                cancel
            </span>
            <label htmlFor="btn-copy-link" className={style["label-for-copy"]}>
                <input
                    id="link-url-img-uploaded"
                    readOnly
                    type="text"
                    value={uploadedImage}
                    onClick={() => {
                        navigator.clipboard.writeText(uploadedImage);
                    }}
                />
                <Button className="btn-copy-link" btnFor="link-url-img-uploaded">
                    Copy Link
                </Button>
            </label>
        </div>
    );
};

export default CardSuccess;
