import BestSeller from "../../pages/BestSeller/BestSeller";
import Categories from "../../pages/Categories/Categories";
import BottomBanner from "../BottomBanner/BottomBanner";
import Hero from "../HeroSection/Hero";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <Hero />
                <Categories></Categories>
                <BestSeller></BestSeller>
                <BottomBanner></BottomBanner>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;
