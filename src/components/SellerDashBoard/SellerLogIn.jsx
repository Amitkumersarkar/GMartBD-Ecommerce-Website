import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";

const SellerLogIn = () => {
    const { isSeller, setIsSeller } = useAuthContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    useEffect(() => {
        if (isSeller) {
            navigate("/seller");
        }
    }, [isSeller]);

    return (
        <div>

        </div>
    );
};

export default SellerLogIn;