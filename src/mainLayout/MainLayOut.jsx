import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LogIn from "../auth/LogIn";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const MainLayOut = () => {
    const { pathname } = useLocation();
    const isSellerPath = pathname.includes("seller");
    const { showUserLogin } = useAuthContext();

    return (
        <div>
            {!isSellerPath && <Navbar />}

            {showUserLogin && <LogIn />}

            <Toaster />

            {/* Child pages render here */}
            <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
                <Outlet />
            </div>

            {!isSellerPath && <Footer />}
        </div>
    );
};

export default MainLayOut;
