import React from "react";
import IUser from "../../interfaces/IUser";

type UserContextType = {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

const iUserContextState = {
    user: null,
    setUser: () => {},
};

const UserContext = React.createContext<UserContextType>(iUserContextState);

export default UserContext;
