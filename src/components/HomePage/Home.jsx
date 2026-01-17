import Hero from '../HeroSection/Hero';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto pt-10'>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Home;