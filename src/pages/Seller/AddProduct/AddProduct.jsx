import { AuthContext } from "../../../context/AuthContext";

const AddProduct = () => {
    const { isSeller } = AuthContext();

    if (isSeller)
        return (
            <div>

            </div>
        );
};

export default AddProduct;