import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";

const SellerLogIn = () => {
    const { isSeller, setIsSeller } = useAuthContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSeller(true)

    }


    useEffect(() => {
        if (isSeller) {
            navigate("/seller");
        }
    }, [isSeller]);

    return !isSeller && (
        <form onSubmit={handleSubmit} className="min-h-screen flex items-center text-sm text-gray-600">
            <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border-gray-200">
                <p className="text-2xl font-medium m-auto"><span className="text-pink-600">LogIn</span></p>
                <div className="w-full">
                    <p className="" type="email" placeholder="Email" required>Email</p>
                </div>
                <div className="w-full">
                    <p className="" type="password" placeholder="Password" required>Password</p>
                </div>
                <button className="bg-pink-600 text-white w-full py-2 rounded-md cursor-pointer">LogIn</button>
            </div>
        </form>
    );
};

export default SellerLogIn;