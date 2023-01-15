import { useState } from "react";
import classNames from "classnames";
import uploadImage from "../../../services/ws/UploadImage";
import Button from "../../../components/Button";
import style from "./CardUploader.module.scss";
import { ReactComponent as ImageUpload } from "../../../assets/imgs/uploadPage/image-upload.svg";

interface CardUploaderProps {
    uploadedImage: string;
    setUploadedImage: React.Dispatch<React.SetStateAction<string>>;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

export const CardUploader = ({ setUploadedImage, setCurrentTab }: CardUploaderProps) => {
    const [classList, setClassList] = useState<string>("");

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
        setCurrentTab("loading");
        const img = e.dataTransfer.files[0];
        const link = await uploadImage(img);
        setUploadedImage(link);
        setCurrentTab("cardSuccess");
    }

    async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentTab("loading");
        const img = event.target.files![0];
        const link = await uploadImage(img);
        setUploadedImage(link);
        setCurrentTab("cardSuccess");
    }

    return (
        <div className={style.card}>
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
                <h2>Or</h2>
                <Button btnFor="file_upload">Choose a file</Button>
            </form>
        </div>
    );
};
