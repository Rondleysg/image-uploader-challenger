import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import IUser from "./interfaces/IUser";
import AuthenticationPage from "./pages/AuthenticationPage";
import ProfilePage from "./pages/ProfilePage";
import UnsplashPage from "./pages/UnsplashPage";
import getUserByToken from "./services/ws/user/GetUserByToken";

export default function AppRoutes() {
    const [signed, setSigned] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    const getUser = async (token: string) => {
        const userFromToken = await getUserByToken(token);
        setUser(userFromToken);
        setSigned(true);
    };

    useEffect(() => {
        if (user === null) {
            return;
        }

        localStorage.setItem("token", user.token);
        setSigned(true);
    }, [user]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getUser(token);
        }
    }, []);

    return (
        <UserContext.Provider value={user}>
            <Router>
                <Routes>
                    <Route path="/" element={<UnsplashPage signed={signed} />} />
                    {signed && user ? (
                        <>
                            <Route
                                path="profile"
                                element={<ProfilePage user={user} setUser={setUser} />}
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
        </UserContext.Provider>
    );
}
