import "./App.scss";
import Footer from "../components/Footer";
import { useState } from "react";
import TabComponent from "./UploadImagePage";

function App() {
    const [uploadedImage, setUploadedImage] = useState("");
    const [currentTab, setCurrentTab] = useState("cardUpLoader");

    return (
        <div className="App">
            <TabComponent
                uploadedImage={uploadedImage}
                setUploadedImage={setUploadedImage}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <Footer />
        </div>
    );
}

export default App;
