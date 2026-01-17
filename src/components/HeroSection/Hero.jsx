import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Hero = () => {

    return (
        <div className="relative">
            <img src={assets.main_banner_bg} alt="banner" className="w-full hidden md:block" />
            <img src={assets.main_banner_bg_sm} alt="banner" className="w-full md:hidden" />
            <div className="">
                <h1 className="">
                    Freshness You Can Trust, Savings You will Love!
                </h1>
            </div>
            <div className="">
                <Link to='/products' className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer">
                    Shop Now
                    <img src={assets.white_arrow_icon} alt="arrow" className="md:hidden transition group-focus:translate-x-1" />
                </Link>
                <Link to='/products' className="group hidden md:flex items-center gap-2 px-7 md:px-9 py-3 transition rounded text-white cursor-pointer">
                    Explore Deals
                    <img src={assets.black_arrow_icon} alt="arrow" className=" transition group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
};

export default Hero;