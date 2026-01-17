import { Outlet } from "react-router-dom";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <div className='max-w-7xl mx-auto mt-10'>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default MainLayOut;
