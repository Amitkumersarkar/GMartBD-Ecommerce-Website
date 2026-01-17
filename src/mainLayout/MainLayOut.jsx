import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayOut = () => {
    // const { pathname } = useLocation();
    // const isSellerPath = pathname.includes("seller");

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayOut;
