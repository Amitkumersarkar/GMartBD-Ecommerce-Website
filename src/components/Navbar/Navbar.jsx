import { useEffect, useState } from "react";
import { navbarStyles, navItem } from "../../assets/dummyStyles";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState(location.pathname);

    // keep active tab in sync with route
    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <nav
            className={`${navbarStyles.nav} ${scrolled ? navbarStyles.scrolledNav : navbarStyles.unscrolledNav
                }`}
        >
            <div className={navbarStyles.borderGradient}>
                <div className={navbarStyles.particlesContainer}></div>
                <div
                    className={`${navbarStyles.particle} w-24 h-24 bg-emerald-500/5 -top-12 left-1/4 ${navbarStyles.floatAnimation}`}
                />
                <div
                    className={`${navbarStyles.particle} w-32 h-32 bg-green-500/5 -bottom-16 left-2/3 ${navbarStyles.floatSlowAnimation}`}
                />
                <div
                    className={`${navbarStyles.particle} w-16 h-16 bg-teal-500/5 -top-8 left-3/4 ${navbarStyles.floatSlowerAnimation}`}
                />
            </div>

            <div className={navbarStyles.container}>
                <div className={navbarStyles.innerContainer}>
                    <NavLink to="/" className={navbarStyles.logoLink}>
                        <img
                            src="/src/assets/favicon.svg"
                            alt="G-Mart Logo"
                            className="w-9 h-9 object-contain drop-shadow-md"
                        />
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                            Mart.<span className="text-sm font-semibold text-gray-300">BD</span>
                        </h1>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className={navbarStyles.desktopNav}>
                        {navItem.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={`${navbarStyles.navItem} ${activeTab === item.path
                                    ? navbarStyles.activeNavItem
                                    : navbarStyles.inactiveNavItem
                                    }`}
                            >
                                <div className="flex items-center gap-1">
                                    <span
                                        className={`${navbarStyles.navIcon} ${activeTab === item.path
                                            ? navbarStyles.activeNavIcon
                                            : navbarStyles.inactiveNavIcon
                                            }`}
                                    >
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
