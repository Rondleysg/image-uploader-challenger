import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabComponentAuthentication from "./pages/AuthenticationPage";
import UnsplashPage from "./pages/UnsplashPage";
import TabComponentUploadImage from "./pages/UploadImagePage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UnsplashPage />} />
                <Route path="/authentication" element={<TabComponentAuthentication />} />
                <Route path="/upload" element={<TabComponentUploadImage />} />
            </Routes>
        </Router>
    );
}
