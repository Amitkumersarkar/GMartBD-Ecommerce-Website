import Categories from "../../pages/Categories/Categories";
import Hero from "../HeroSection/Hero";

const Home = () => {
    return (
        <div>
            <div className="mt-10">
                <Hero />
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;
