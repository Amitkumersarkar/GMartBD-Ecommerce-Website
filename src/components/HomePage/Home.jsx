import BestSeller from "../../pages/BestSeller/BestSeller";
import Categories from "../../pages/Categories/Categories";
import BottomBanner from "../BottomBanner/BottomBanner";
import Hero from "../HeroSection/Hero";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <Hero />
                <Categories></Categories>
                <BestSeller></BestSeller>
                <BottomBanner></BottomBanner>
            </div>
        </div>
    );
};

export default Home;
