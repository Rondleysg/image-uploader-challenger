import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import ProfilePage from "./pages/ProfilePage";
import UnsplashPage from "./pages/UnsplashPage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UnsplashPage />} />
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}
