import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from "./context/User";
import useCookies from "./hooks/Cookies/useCookies";
import getUserByToken from "./services/ws/user/GetUserByToken";
import IUser from "./interfaces/IUser";
import Loading from "./components/Loading";

const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const UnsplashPage = React.lazy(() => import("./pages/UnsplashPage"));
const AuthenticationPage = React.lazy(() => import("./pages/AuthenticationPage"));

export default function AppRoutes() {
    const [signed, setSigned] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);
    const cookies = useCookies();

    useEffect(() => {
        async function getUser(token: string) {
            const userFromToken = await getUserByToken(token);
            if (userFromToken.id) {
                setUser(userFromToken);
                setSigned(true);
            }
        }
        const token = cookies.get("token");
        if (token) {
            getUser(token);
        }
    }, [cookies]);

    useEffect(() => {
        if (user === null) {
            return;
        }

        cookies.set("token", user.token);
    }, [user, cookies]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Suspense fallback={<Loading title="Loading" />}>
                    <Routes>
                        <Route path="/" element={<UnsplashPage signed={signed} />} />
                        {signed && user ? (
                            <>
                                <Route path="profile" element={<ProfilePage />} />
                            </>
                        ) : (
                            <Route
                                path="*"
                                element={<AuthenticationPage setSigned={setSigned} />}
                            />
                        )}
                    </Routes>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
}
