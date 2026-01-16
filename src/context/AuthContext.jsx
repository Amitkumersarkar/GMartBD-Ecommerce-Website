// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);

    const value = {
        user,
        setUser,
        isSeller,
        setIsSeller,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuthContext must be used inside AuthContextProvider");
    return context;
};
