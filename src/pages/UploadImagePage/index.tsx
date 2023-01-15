import CardSuccess from "./CardSuccess";
import { CardUploader } from "./CardUploader";
import Loading from "../../components/Loading";
import { useState } from "react";
import style from "./UploadImagePage.module.scss";
import Footer from "./FooterUploadPage";

export default function TabComponentUploadImage() {
    const [uploadedImage, setUploadedImage] = useState("");
    const [currentTab, setCurrentTab] = useState("cardUpLoader");
    return (
        <div className={style.UploadImagePage}>
            {currentTab === "cardUpLoader" ? (
                <CardUploader
                    uploadedImage={uploadedImage}
                    setUploadedImage={setUploadedImage}
                    setCurrentTab={setCurrentTab}
                />
            ) : currentTab === "cardSuccess" ? (
                <CardSuccess uploadedImage={uploadedImage} />
            ) : (
                <Loading />
            )}
            <Footer />
        </div>
    );
}
