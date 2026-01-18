import ProductCard from "../ProductCard/ProductCard";

const BestSeller = () => {

    return (
        <div className="mt-16">
            <p className="text-2xl text-gray-700 md:text-3xl font-medium">Best Sellers</p>
            <div className="">
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default BestSeller;