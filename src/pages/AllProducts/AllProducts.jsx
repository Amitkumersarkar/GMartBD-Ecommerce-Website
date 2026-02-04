import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const AllProducts = () => {
    const { products } = useAuthContext();
    const [filteredProducts, setFilteredProducts] = useState([]);

    return (
        <div className="mt-16 flex flex-col">
            <div className="w-max flex flex-col items-end">
                <p className="text-2xl font-medium uppercase text-black">
                    All Products
                </p>
                <div className="w-16 h-0.5 bg-pink-600 rounded-full"></div>
                <div className="">

                </div>
            </div>
        </div>
    );
};

export default AllProducts;
