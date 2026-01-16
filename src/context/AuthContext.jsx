import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);


    const info = {
        user,
        setUser,
        isSeller,
        setIsSeller
    }
    return <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}