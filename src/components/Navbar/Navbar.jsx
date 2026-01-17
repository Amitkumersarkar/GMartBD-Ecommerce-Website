import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, setUser, setShowUserLogin } = useAuthContext();
    const navigate = useNavigate();

    const handleLogOut = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between
        px-6 md:px-16 lg:px-24 xl:px-32 py-4
        bg-gradient-to-r from-cyan-900/80 via-indigo-700/80 to-sky-900/60
        backdrop-blur-xl border-b border-white/10
        shadow-lg">

            <NavLink to="/" onClick={() => setOpen(false)}>
                <img src={assets.logo} alt="logo" className="h-9" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 text-white/90">
                <NavLink className="hover:text-white transition" to="/">Home</NavLink>
                <NavLink className="hover:text-white transition" to="/about">About</NavLink>
                <NavLink className="hover:text-white transition" to="/contact">Contact</NavLink>
                <NavLink className="hover:text-white transition" to="/all-products">All Products</NavLink>

                {/* Search Bar (Desktop) */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-white/50 px-3 rounded-full bg-white/10">
                    <input
                        className="py-1.5 w-full bg-transparent outline-none placeholder-white/70 text-white"
                        type="text"
                        placeholder="Search products"
                    />
                    <img src={assets.search_icon} alt="search" className="h-4 w-4 opacity-80 invert brightness-10" />
                </div>

                <div
                    onClick={() => navigate("/cart")}
                    className="relative cursor-pointer"
                >
                    <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-90 invert brightness-10" />
                    <span className="absolute -top-2 -right-3 text-xs text-white bg-pink-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                        3
                    </span>
                </div>

                {!user ? (
                    <button
                        onClick={() => setShowUserLogin(true)}
                        className="px-8 py-2 rounded-full text-white
                        bg-gradient-to-r from-indigo-500 to-sky-500
                        hover:from-indigo-600 hover:to-sky-600 transition"
                    >
                        Login
                    </button>
                ) : (
                    <div className="relative group">
                        <img
                            src={assets.profile_icon}
                            alt="profile"
                            className="w-10 cursor-pointer rounded-full ring-2 ring-white/30 hover:ring-indigo-400 transition"
                        />

                        <ul className="hidden group-hover:block absolute top-12 right-0 bg-gradient-to-br from-white via-indigo-50 to-sky-50 shadow-2xl border border-white/40 py-2 w-36 rounded-xl text-sm text-gray-700 backdrop-blur-md">

                            <li
                                onClick={() => navigate("/my-orders")}
                                className="relative px-3 py-2 cursor-pointer group/item overflow-hidden"
                            >
                                <span className="relative z-10">My Orders</span>
                                <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover/item:w-full"></span>
                            </li>

                            <li
                                onClick={handleLogOut}
                                className="relative px-3 py-2 cursor-pointer group/item overflow-hidden text-red-600"
                            >
                                <span className="relative z-10">LogOut</span>
                                <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover/item:w-full"></span>
                            </li>
                        </ul>
                    </div>

                )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="sm:hidden">
                <img src={assets.menu_icon} alt="menu" className="w-7 opacity-90 invert brightness-10" />
            </button>

            {/* Mobile Menu (Small) */}
            {open && (
                <div className="absolute top-[60px] right-2 w-[220px]
                bg-white/95 backdrop-blur shadow-xl py-3
                flex flex-col gap-2 px-4 text-sm sm:hidden rounded-xl">

                    {/* Search (Mobile) */}
                    <div className="flex items-center gap-2 border border-gray-200 px-2 rounded-full bg-gray-50">
                        <input
                            className="py-1 w-full bg-transparent outline-none placeholder-gray-400 text-xs"
                            type="text"
                            placeholder="Search..."
                        />
                        <img src={assets.search_icon} alt="search" className="h-3 w-3 opacity-70" />
                    </div>

                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>

                    {user && (
                        <NavLink to="/my-orders" onClick={() => setOpen(false)}>
                            My Orders
                        </NavLink>
                    )}

                    <NavLink to="/all-products" onClick={() => setOpen(false)}>All Products</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

                    {!user ? (
                        <button
                            onClick={() => { setOpen(false); setShowUserLogin(true); }}
                            className="px-4 py-1.5 mt-1 rounded-full text-xs text-white
                            bg-gradient-to-r from-indigo-500 to-sky-500"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={handleLogOut}
                            className="px-4 py-1.5 mt-1 rounded-full text-xs text-white
                            bg-gradient-to-r from-red-500 to-pink-500"
                        >
                            LogOut
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
