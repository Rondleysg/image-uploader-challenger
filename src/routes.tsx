import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabComponentAuthentication from "./pages/AuthenticationPage";
import UnsplashPage from "./pages/UnsplashPage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UnsplashPage />} />
                <Route path="/authentication" element={<TabComponentAuthentication />} />
            </Routes>
        </Router>
    );
}
