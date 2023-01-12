import { useState } from "react";
import uploadImage from "../../services/ws/UploadImage";
import Button from "../Button";
import "./CardUploader.scss";

interface CardUploaderProps {
    uploadedImage: string;
    setUploadedImage: React.Dispatch<React.SetStateAction<string>>;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

export const CardUploader = ({ setUploadedImage, setCurrentTab }: CardUploaderProps) => {
    const [classList, setClassList] = useState<string>("drag-drop-content");
    const ImageUpload = require("../../assets/imgs/image-upload.svg").default as string;

    function onEvent(e: React.DragEvent): void {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setClassList(`drag-drop-content highlight`);
        }
        if (e.type === "dragleave" || e.type === "drop") {
            setClassList(`drag-drop-content`);
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
        <div className="card">
            <h1>Upload your image</h1>
            <h3>File should be Jpeg, Png,...</h3>
            <form>
                <div
                    className={classList}
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
                        onChange={(event) => {
                            onChange(event);
                        }}
                    />
                    <img src={ImageUpload} alt="example img to upload"></img>
                    <h2>Drag & Drop your image here</h2>
                </div>
                <h2>Or</h2>
                <Button btnFor="file_upload">Choose a file</Button>
            </form>
        </div>
    );
};
