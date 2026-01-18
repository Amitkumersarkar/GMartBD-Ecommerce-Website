import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/HomePage/Home";
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {
    const { pathname } = useLocation();
    const isSellerPath = pathname.includes("seller");

    return (
        <div>
            {isSellerPath ? null : <Navbar />}
            {/* react hot-tost message */}
            <Toaster></Toaster>
            {/* <Outlet /> */}
            <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                </Routes>
            </div>
        </div>
    );
};

export default MainLayOut;
