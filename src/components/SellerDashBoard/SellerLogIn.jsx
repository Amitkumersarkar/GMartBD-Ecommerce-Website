import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";

const SellerLogIn = () => {
    const { isSeller, setIsSeller } = useAuthContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Temporary login logic
        if (email && password) {
            setIsSeller(true);
        }
    };

    useEffect(() => {
        if (isSeller) {
            navigate("/seller");
        }
    }, [isSeller, navigate]);

    if (isSeller) return null;

    return (
        <form
            onSubmit={handleSubmit}
            className="min-h-screen flex items-center text-sm text-gray-600"
        >
            <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-pink-600">Seller LogIn</span>
                </p>

                <div className="w-full">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-none rounded outline-none focus:border-pink-600"
                    />
                </div>

                <div className="w-full">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-none rounded outline-none focus:border-pink-600"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-pink-600 text-white w-full py-2 rounded-md hover:bg-pink-700 transition"
                >
                    LogIn
                </button>
            </div>
        </form>
    );
};

export default SellerLogIn;
