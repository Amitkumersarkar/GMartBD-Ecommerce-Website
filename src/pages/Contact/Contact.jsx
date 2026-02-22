import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 flex flex-col gap-12">

            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                    Contact <span className="text-pink-600">Us</span>
                </h1>
                <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
                    Have questions or feedback? We'd love to hear from you! Fill out the form below or reach us through our contact info.
                </p>
            </div>

            {/* Contact Form & Info */}
            <div className="flex flex-col lg:flex-row gap-12">

                <div className="flex-1 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        <button
                            type="submit"
                            className="mt-2 bg-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
                    <div className="flex items-start gap-4">
                        <FaEnvelope className="text-pink-600 w-6 h-6 mt-1" />
                        <p className="text-gray-600 text-sm sm:text-base">amitsarkar.dev.bd@gmail.com</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaPhone className="text-pink-600 w-6 h-6 mt-1" />
                        <p className="text-gray-600 text-sm sm:text-base">+880 1234 567890</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-pink-600 w-6 h-6 mt-1" />
                        <p className="text-gray-600 text-sm sm:text-base">Mirpur-2, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            {/* Developed By Section */}
            <div className="text-center mt-12 border-t pt-6">
                <p className="text-gray-500 text-sm sm:text-base">
                    Developed by <span className="text-pink-600 font-semibold">Amit Sarkar</span> &copy; {new Date().getFullYear()}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Full-Stack Developer | BUBT CSE | <span className="text-gray-400">amitsarkar.dev.bd@gmail.com</span>
                </p>
            </div>

        </div>
    );
};

export default Contact;