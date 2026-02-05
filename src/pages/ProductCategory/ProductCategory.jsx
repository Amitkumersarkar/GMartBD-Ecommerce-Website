import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const ProductCategory = () => {
    const { products } = useAuthContext();
    const { category } = useParams();

    return (
        <div>

        </div>
    );
};

export default ProductCategory;