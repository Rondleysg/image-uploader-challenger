import CardSuccess from "./CardSuccess";
import { CardUploader } from "./CardUploader";
import Loading from "../../components/Loading";
import { useState } from "react";
import style from "./uploadImagePage.module.scss";
import Footer from "./FooterUploadPage";
import IPhoto from "../../interfaces/IPhoto";

interface TabComponentUploadImageProps {
    onClose: () => void;
    images: IPhoto[];
    setImages: React.Dispatch<React.SetStateAction<IPhoto[]>>;
}

export default function TabComponentUploadImage({
    onClose,
    images,
    setImages,
}: TabComponentUploadImageProps) {
    const [uploadedImage, setUploadedImage] = useState("");
    const [currentTab, setCurrentTab] = useState("cardUpLoader");

    return (
        <div className={style.UploadImagePage}>
            {currentTab === "cardUpLoader" ? (
                <CardUploader
                    onClose={onClose}
                    uploadedImage={uploadedImage}
                    setUploadedImage={setUploadedImage}
                    setCurrentTab={setCurrentTab}
                    images={images}
                    setImages={setImages}
                />
            ) : currentTab === "cardSuccess" ? (
                <CardSuccess uploadedImage={uploadedImage} onClose={onClose} />
            ) : (
                <Loading title="Uploading..." />
            )}
            <Footer />
        </div>
    );
}
