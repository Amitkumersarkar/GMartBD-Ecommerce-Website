import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SellerLogIn = () => {
    const { isSeller, setIsSeller } = useAuthContext();
    const navigate = useNavigate();

    // default credentials
    const [email, setEmail] = useState("seller@gmail.com");
    const [password, setPassword] = useState("123456");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "seller@gmail.com" && password === "123456") {
            setIsSeller(true);
            toast.success("Seller login successful 🚀");
        } else {
            toast.error("Invalid email or password ❌");
        }
    };

    useEffect(() => {
        if (isSeller) {
            navigate("/sellerDashBoard");
        }
    }, [isSeller, navigate]);

    return (
        <form
            onSubmit={handleSubmit}
            className="min-h-screen flex items-center text-sm text-gray-600"
        >
            <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-pink-600">Seller LogIn</span>
                </p>

                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-pink-600"
                />

                {/* Password with show/hide options*/}
                <div className="w-full relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-pink-600"
                    />

                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 cursor-pointer text-xs text-pink-600 select-none"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </span>
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