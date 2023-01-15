import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabComponentAuthentication from "./pages/AuthenticationPage";
import TabComponentUploadImage from "./pages/UploadImagePage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TabComponentUploadImage />} />
                <Route path="/authentication" element={<TabComponentAuthentication />} />
            </Routes>
        </Router>
    );
}
