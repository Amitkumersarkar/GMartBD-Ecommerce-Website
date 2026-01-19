import { assets, features } from "../../assets/assets";

const BottomBanner = () => {

    return (
        <div className="relative mt-24">
            <img className="w-full hidden md:block" src={assets.bottom_banner_image} alt="image" />
            <img className="w-full md:hidden" src={assets.bottom_banner_image_sm} alt="image" />

            <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
                <div className="">
                    <h1 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-6">Why We Are the Best?</h1>
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 mt-2">
                            <img className="md:max-w-11 w-9" src={feature.icon} alt={feature.title} />
                            <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;