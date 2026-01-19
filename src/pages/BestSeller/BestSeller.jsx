import { useAuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductCard/ProductCard";

const BestSeller = () => {
    const { products } = useAuthContext();

    return (
        <div className="mt-16">
            <p className="text-2xl text-gray-700 md:text-3xl font-medium">Best Sellers</p>
            <div className="">
                {
                    products.filter((product) => product.inStock).slice(0, 5).map((product, idx) => (

                        <ProductCard key={idx} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default BestSeller;