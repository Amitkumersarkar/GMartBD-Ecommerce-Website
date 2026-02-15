import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const SellerLogIn = () => {
    const { isSeller, setIsSeller } = useAuthContext();
    const navigate = useNavigate();

    return (
        <div>

        </div>
    );
};

export default SellerLogIn;