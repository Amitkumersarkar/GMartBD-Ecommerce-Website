import { createContext } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    return <AppContext.Provider></AppContext.Provider>
}