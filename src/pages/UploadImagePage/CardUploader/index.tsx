import { useState } from "react";
import classNames from "classnames";
import uploadImage from "../../../services/ws/image/UploadImage";
import Button from "../../../components/Button";
import style from "./cardUploader.module.scss";
import { ReactComponent as ImageUpload } from "../../../assets/imgs/image-upload.svg";
import Input from "../../../components/Input";
import IPhoto from "../../../interfaces/IPhoto";
import useUser from "../../../hooks/User/useUser";

interface CardUploaderProps {
    uploadedImage: string;
    setUploadedImage: React.Dispatch<React.SetStateAction<string>>;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
    onClose: () => void;
    images: IPhoto[];
    setImages: React.Dispatch<React.SetStateAction<IPhoto[]>>;
}

export const CardUploader = ({
    setUploadedImage,
    setCurrentTab,
    onClose,
    images,
    setImages,
}: CardUploaderProps) => {
    const [classList, setClassList] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const { user } = useUser();

    function onEvent(e: React.DragEvent): void {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setClassList("highlight");
        }
        if (e.type === "dragleave" || e.type === "drop") {
            setClassList("");
        }
    }

    async function onDropImage(e: React.DragEvent) {
        e.preventDefault();
        if (!user) {
            return;
        }
        setCurrentTab("loading");
        const img = e.dataTransfer.files[0];
        const { id, link } = await uploadImage(img, subtitle, user);
        setUploadedImage(link);
        setCurrentTab("cardSuccess");
        setImages([{ id: id, link: link, subtitle: subtitle }, ...images]);
    }

    async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentTab("loading");
        if (!user) {
            return;
        }
        const img = event.target.files![0];
        const { id, link } = await uploadImage(img, subtitle, user);
        setUploadedImage(link);
        setCurrentTab("cardSuccess");
        setImages([{ id: id, link: link, subtitle: subtitle }, ...images]);
    }

    return (
        <div className={classNames(style.card)}>
            <h1>Upload your image</h1>
            <h3>File should be Jpeg, Png,...</h3>
            <form>
                <div
                    className={classNames({
                        [style["drag-drop-content"]]: true,
                        [style[classList]]: classList !== "",
                    })}
                    onDragEnter={(event) => onEvent(event)}
                    onDragOver={(event) => onEvent(event)}
                    onDragLeave={(event) => onEvent(event)}
                    onDrop={(event) => onDropImage(event)}
                >
                    <input
                        type="file"
                        id="file_upload"
                        multiple={false}
                        accept="image/*"
                        hidden
                        onChange={(event) => {
                            onChange(event);
                        }}
                    />
                    <ImageUpload />
                    <h2>Drag & Drop your image here</h2>
                </div>
                <Input
                    onChange={(event) => {
                        setSubtitle(event.target.value);
                    }}
                    required
                    id="inputForSubtitle"
                    placeHolder="Subtitle for image"
                    type="text"
                >
                    <span style={{ color: "#BDBDBD" }} className="material-symbols-outlined">
                        subtitles
                    </span>
                </Input>
                <h2>Or</h2>
                <Button btnFor="file_upload">Choose a file</Button>
                <button className={style.btnCancel} onClick={onClose}>
                    Cancel
                </button>
            </form>
        </div>
    );
};
