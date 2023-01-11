import CardSuccess from "../../components/CardSuccess";
import { CardUploader } from "../../components/CardUploader";
import Loading from "../../components/Loading";

interface TabComponentProps {
    uploadedImage: string;
    setUploadedImage: React.Dispatch<React.SetStateAction<string>>;
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabComponent({
    uploadedImage,
    setUploadedImage,
    currentTab,
    setCurrentTab,
}: TabComponentProps) {
    return currentTab === "cardUpLoader" ? (
        <CardUploader
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
            setCurrentTab={setCurrentTab}
        />
    ) : currentTab === "cardSuccess" ? (
        <CardSuccess uploadedImage={uploadedImage} />
    ) : (
        <Loading />
    );
}
