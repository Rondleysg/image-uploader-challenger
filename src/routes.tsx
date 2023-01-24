import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IUser from "./interfaces/IUser";
import AuthenticationPage from "./pages/AuthenticationPage";
import ProfilePage from "./pages/ProfilePage";
import UnsplashPage from "./pages/UnsplashPage";

export default function AppRoutes() {
    const [signed, setSigned] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        if (user === null) {
            return;
        }

        localStorage.setItem("user", JSON.stringify(user));
        setSigned(true);
    }, [user]);

    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")!));
            setSigned(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                {signed ? (
                    <>
                        <Route path="/" element={<UnsplashPage user={user!} />} />
                        <Route
                            path="profile"
                            element={<ProfilePage setUser={setUser} user={user!} />}
                        />
                    </>
                ) : (
                    <Route
                        path="*"
                        element={<AuthenticationPage setUser={setUser} setSigned={setSigned} />}
                    />
                )}
            </Routes>
        </Router>
    );
}
