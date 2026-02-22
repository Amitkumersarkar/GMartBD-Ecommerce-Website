import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { categories } from "../../assets/assets";
import ProductCard from "../ProductCard/ProductCard";

const ProductCategory = () => {
    const { products = [] } = useAuthContext();
    const { category } = useParams();

    if (!category) return null;

    const searchCategory = categories.find(
        (item) => item.path.toLowerCase() === category.toLowerCase()
    );

    const filteredProducts = products.filter(
        (product) =>
            product.category?.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className="mt-16 px-4 md:px-6 lg:px-8">
            {searchCategory && (
                <div className="flex flex-col items-end w-max mb-4">
                    <p className="text-2xl md:text-3xl font-medium">
                        {searchCategory.text.toUpperCase()}
                    </p>
                    <div className="w-16 h-0.5 bg-pink-600 rounded-full" />
                </div>
            )}

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-[60vh]">
                    <p className="text-2xl font-medium text-pink-600">
                        No Products Found In This Category
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductCategory;