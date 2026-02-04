import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
    const { products } = useAuthContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchQuery && searchQuery.length > 0) {
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
            <div className="flex flex-col items-start mb-4">
                <p className="text-2xl font-medium uppercase text-black">
                    All Products
                </p>
                <div className="w-16 h-0.5 bg-pink-600 rounded-full"></div>
            </div>

            <div className="mb-4 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded outline-pink-600"
                />
            </div>

            <div className="flex flex-wrap gap-4">
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
