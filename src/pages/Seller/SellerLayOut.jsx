import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAuthContext } from "../../context/AuthContext";

const SellerLayOut = () => {
    const { setIsSeller } = useAuthContext();
    const navigate = useNavigate();

    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    const logOut = () => {
        setIsSeller(false);
        navigate("/");
    };

    return (
        <>
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
                <Link to="/">
                    <img
                        className="cursor-pointer w-32 md:w-40"
                        src={assets.logo}
                        alt="logo"
                    />
                </Link>
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

            {/* Layout */}
            <div className="flex">
                {/* Sidebar */}
                <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                    {sidebarLinks.map((item) => (
                        <NavLink
                            to={item.path}
                            key={item.name}
                            end={item.path === "/seller"}
                            className={({ isActive }) =>
                                `flex items-center py-3 px-4 gap-3
                                ${isActive
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

                {/* Page Content */}
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default SellerLayOut;
