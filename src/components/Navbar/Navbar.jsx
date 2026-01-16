import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav
                className="sticky top-0 z-50 flex items-center justify-between
        px-6 md:px-16 lg:px-24 xl:px-32 py-4
        bg-gradient-to-r from-indigo-600/30 via-fuchsia-500/20 to-cyan-400/30
        backdrop-blur-2xl border-b border-white/30
        shadow-[0_10px_30px_rgba(0,0,0,0.15)]
        transition-all duration-300"
            >
                <NavLink
                    to="/"
                    className="flex items-center gap-1 hover:scale-105 transition-transform duration-300 font-extrabold text-2xl bg-clip-text text-transparent
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                >
                    <img
                        src="/src/assets/favicon.svg"
                        alt="Logo"
                        className="w-8 h-8 object-contain"
                    />
                    <div className=" leading-none">
                        <span>Mart.</span>
                        <span className="text-xs text-gray-500">bd</span>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8">
                    {["Home", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative font-medium text-gray-900 transition
              hover:text-indigo-600
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-indigo-600 after:transition-all
              hover:after:w-full"
                        >
                            {item}
                        </a>
                    ))}

                    {/* Search */}
                    <div
                        className="hidden lg:flex items-center text-sm gap-2
            border border-white/40 bg-white/60 px-4 rounded-full
            hover:ring-2 hover:ring-indigo-400/60 transition"
                    >
                        <input
                            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-700 text-gray-800"
                            type="text"
                            placeholder="Search products"
                        />
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M10.836 10.615 15 14.695"
                                stroke="#1F2937"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                            <path
                                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                                stroke="#1F2937"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* Cart */}
                    <div className="relative cursor-pointer group">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="group-hover:scale-110 transition"
                        >
                            <path
                                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0m6.417 0a.583.583 0 1 1-1.167 0"
                                stroke="#4F46E5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-600 w-[18px] h-[18px] grid place-items-center rounded-full">
                            3
                        </span>
                    </div>

                    <button
                        className="px-8 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full
            shadow-md hover:shadow-indigo-400/50 transition"
                    >
                        Login
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                    className="sm:hidden p-2 rounded-lg hover:bg-white/40 transition"
                >
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
                        <rect width="21" height="1.5" rx=".75" fill="#1F2937" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#1F2937" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#1F2937" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div
                    className={`${open ? "flex" : "hidden"} absolute top-full left-0 w-full
          bg-gradient-to-b from-white/90 to-indigo-50/90 backdrop-blur-lg shadow-xl
          py-5 flex-col items-start gap-3 px-6 text-sm md:hidden`}
                >
                    {["Home", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="w-full py-1 font-medium text-gray-800 hover:text-indigo-600 transition"
                        >
                            {item}
                        </a>
                    ))}

                    <button
                        className="mt-3 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white
            rounded-full shadow-md hover:shadow-indigo-400/50 transition"
                    >
                        Login
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
