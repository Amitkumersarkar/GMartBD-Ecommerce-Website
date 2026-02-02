import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/HomePage/Home";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";

const MainLayOut = () => {
    const { pathname } = useLocation();
    const isSellerPath = pathname.includes("seller");

    return (
        <div>
            {isSellerPath ? null : <Navbar />}
            <Toaster></Toaster>
            <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                </Routes>
            </div>
            {
                !isSellerPath && <Footer></Footer>
            }
        </div>
    );
};

export default MainLayOut;
