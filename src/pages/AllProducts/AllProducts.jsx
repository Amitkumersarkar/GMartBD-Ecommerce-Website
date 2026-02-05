import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
    const { products, searchQuery } = useAuthContext(); // use context query
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchQuery && searchQuery.trim().length > 0) {
            setFilteredProducts(
                products.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredProducts(products);
        }
    }, [products, searchQuery]);

    return (
        <div className="mt-16 flex flex-col">
            <div className="flex flex-col items-end w-max mb-4">
                <p className="text-2xl font-medium uppercase text-black">
                    All Products
                </p>
                <div className="w-16 h-0.5 bg-pink-600 rounded-full "></div>
            </div>

            <div className="flex justify-center flex-wrap gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts
                        .filter(product => product.inStock)
                        .map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                ) : (
                    <p className="text-gray-500 mt-4">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
