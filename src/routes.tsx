import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context/User";
import IUser from "./interfaces/IUser";
import AuthenticationPage from "./pages/AuthenticationPage";
import ProfilePage from "./pages/ProfilePage";
import UnsplashPage from "./pages/UnsplashPage";
import getUserByToken from "./services/ws/user/GetUserByToken";

export default function AppRoutes() {
    const [signed, setSigned] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        async function getUser(token: string) {
            const userFromToken = await getUserByToken(token);
            setUser(userFromToken);
            setSigned(true);
        }
        const token = localStorage.getItem("token");
        if (token) {
            getUser(token);
        }
    }, [setUser]);

    useEffect(() => {
        if (user === null) {
            return;
        }

        localStorage.setItem("token", user.token);
        setSigned(true);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Routes>
                    <Route path="/" element={<UnsplashPage signed={signed} />} />
                    {signed && user ? (
                        <>
                            <Route path="profile" element={<ProfilePage />} />
                        </>
                    ) : (
                        <Route path="*" element={<AuthenticationPage setSigned={setSigned} />} />
                    )}
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}
