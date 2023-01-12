import Button from "../Button";
import "./CardSuccess.scss";

interface CardSuccessProps {
    uploadedImage: string;
}

const CardSuccess = ({ uploadedImage }: CardSuccessProps) => {
    return (
        <div className="cardSuccess">
            <span className="material-symbols-outlined">check_circle</span>
            <h1>Uploaded Successfully!</h1>
            <img src={uploadedImage} alt="img uploaded" />
            <label htmlFor="btn-copy-link" className="label-for-copy">
                <input
                    id="link-url-img-uploaded"
                    readOnly
                    type="text"
                    value={uploadedImage}
                    onClick={() => {
                        navigator.clipboard.writeText(uploadedImage);
                    }}
                />
                <Button classNames="btn-copy-link" btnFor="link-url-img-uploaded">
                    Copy Link
                </Button>
            </label>
        </div>
    );
};

export default CardSuccess;
