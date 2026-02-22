import React from "react";
import GMartLogo from "../../assets/GMartLogo.png";
import DeliveryBoy from "../../assets/bottom_banner_image_sm.png"; // added extension
import { FaShippingFast, FaTags, FaHeadset } from "react-icons/fa";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 mb-16 flex flex-col gap-12">

            {/* Logo */}
            <div className="flex justify-center mb-4">
                <img
                    src={GMartLogo}
                    alt="G-Mart Logo"
                    className="w-32 sm:w-40 md:w-48 object-contain"
                />
            </div>

            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Welcome to <span className="text-pink-600">G-Mart</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-base md:text-lg">
                        At G-Mart, we bring you a seamless online shopping experience.
                        From electronics to fashion, groceries, and more, we have everything you need at competitive prices.
                        Our mission is to make shopping easy, fast, and enjoyable for everyone.
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src={DeliveryBoy}
                        alt="Delivery Boy"
                        className="w-full sm:w-80 md:w-96 lg:w-[500px] h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 bg-pink-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        To provide high-quality products at affordable prices, with fast delivery and excellent customer service.
                    </p>
                </div>
                <div className="flex-1 bg-pink-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Vision</h2>
                    <p className="text-gray-600">
                        To become the leading eCommerce platform in Bangladesh, making online shopping accessible and enjoyable for everyone.
                    </p>
                </div>
            </div>

            {/* Why Choose Us */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Why Choose <span className="text-pink-600">G-Mart</span>?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center">
                        <FaShippingFast className="text-pink-600 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                        <p className="text-gray-500">Get your orders delivered quickly at your doorstep.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center">
                        <FaTags className="text-pink-600 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                        <p className="text-gray-500">Affordable products and exclusive discounts every day.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center">
                        <FaHeadset className="text-pink-600 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-500">Our customer support team is always ready to assist you.</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Ready to Shop with <span className="text-pink-600">G-Mart</span>?
                </h2>
                <p className="text-gray-600 mb-6">
                    Explore our wide range of products and enjoy a seamless shopping experience today.
                </p>
                <a
                    href="/products"
                    className="inline-block px-8 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition"
                >
                    Shop Now
                </a>
            </div>

        </div>
    );
};

export default About;