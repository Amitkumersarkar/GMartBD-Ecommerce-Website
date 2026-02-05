import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { categories } from "../../assets/assets";

const ProductCategory = () => {
    const { products } = useAuthContext();
    const { category } = useParams();
    const searchCategory = categories.find((item) => item.path.toLocaleLowerCase() === category)
    const filteredProducts = products.filter((product) => product.category.toLocaleLowerCase() === category)

    return (
        <div className="">
            {
                searchCategory && (
                    <div className="">
                        <p className=""></p>
                    </div>
                )
            }
        </div>
    );
};

export default ProductCategory;