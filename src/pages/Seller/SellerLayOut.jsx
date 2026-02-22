import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAuthContext } from "../../context/AuthContext";
import GMartLogo from "../../assets/GMartLogo.png";
import { useEffect } from "react";

const SellerLayOut = () => {
    const { isSeller, setIsSeller } = useAuthContext();
    const navigate = useNavigate();

    // Redirect non-sellers
    useEffect(() => {
        if (!isSeller) navigate("/");
    }, [isSeller, navigate]);

    const sidebarLinks = [
        { name: "Add Product", path: "addProduct", icon: assets.add_icon },
        { name: "Product List", path: "productList", icon: assets.product_list_icon },
        { name: "Orders", path: "Orders", icon: assets.order_icon },
    ];

    const logOut = () => {
        setIsSeller(false);
        navigate("/");
    };

    if (!isSeller) return null;

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
                <img className="cursor-pointer w-32 md:w-40" src={GMartLogo} alt="logo" onClick={() => navigate("/")} />
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button
                        onClick={logOut}
                        className="border rounded-full text-sm px-4 py-1 hover:bg-gray-100"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-1">
                <div className="md:w-64 w-16 border-r min-h-screen border-gray-300 pt-4 flex flex-col transition-all duration-300">
                    {sidebarLinks.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `flex items-center py-3 px-4 gap-3 ${isActive
                                    ? "border-r-4 md:border-r-[6px] bg-pink-600/10 border-pink-600 text-pink-600"
                                    : "hover:bg-gray-100/90 border-white"
                                }`
                            }
                        >
                            <img className="w-7 h-7" src={item.icon} alt="icon" />
                            <p className="md:block hidden">{item.name}</p>
                        </NavLink>
                    ))}
                </div>
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default SellerLayOut;