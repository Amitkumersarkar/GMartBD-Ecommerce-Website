import { assets, footerLinks } from "../../assets/assets";

const Footer = () => {


    return (
        <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div className="max-w-md">
                    <img className="w-28 md:w-32" src={assets.logo} alt="logo" />
                    <p className="mt-4 text-sm md:text-base">
                        We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full md:w-[45%]">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 mb-2 md:mb-5">
                                {section.title}
                            </h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <p className="py-4 text-center text-xs sm:text-sm md:text-base text-gray-500">
                Copyright 2026 © G-Mart<span className="text-xs">.bd</span> All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
