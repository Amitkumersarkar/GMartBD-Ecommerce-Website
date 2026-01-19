import { useAuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductCard/ProductCard";

const BestSeller = () => {
    const { products } = useAuthContext();

    if (!products) return null;

    return (
        <div className="mt-16 px-4 sm:px-6 md:px-0">
            <p className="text-2xl text-gray-700 md:text-3xl font-medium">
                Best Sellers
            </p>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6"> */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 md:gap-6 mt-6">
                {products
                    .filter((product) => product.inStock)
                    .slice(0, 5)
                    .map((product, idx) => (
                        <ProductCard key={idx} product={product}></ProductCard>
                    ))}
            </div>
        </div>
    );
};

export default BestSeller;
