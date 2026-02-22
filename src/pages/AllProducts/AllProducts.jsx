import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
    const { products, searchQuery } = useAuthContext();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchQuery && searchQuery.trim().length > 0) {
            setFilteredProducts(
                products.filter((product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredProducts(products);
        }
    }, [products, searchQuery]);

    return (
        <div className="mt-16 px-4 md:px-6 lg:px-8 flex flex-col">
            <div className="flex flex-col items-end w-max mb-4">
                <p className="text-2xl font-medium uppercase text-black">All Products</p>
                <div className="w-16 h-0.5 bg-pink-600 rounded-full"></div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts
                        .filter((product) => product.inStock)
                        .map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                </div>
            ) : (
                <p className="text-gray-500 mt-4 text-center w-full">
                    No products found.
                </p>
            )}
        </div>
    );
};

export default AllProducts;