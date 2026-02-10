import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { FaStar, FaRegStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, addToCart } = useAuthContext();

    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(4);

    useEffect(() => {
        const found = products.find((p) => p._id === id);
        if (found) setProduct(found);
    }, [id, products]);

    if (!product) return <div className="text-center mt-20">Product not found</div>;

    const handleQuantity = (type) => {
        if (type === "inc") {
            setQuantity((prev) => prev + 1);
            toast.success("Quantity increased!");
        } else if (type === "dec" && quantity > 1) {
            setQuantity((prev) => prev - 1);
            toast("Quantity decreased");
        }
    };

    const handleRating = (index) => setRating(index + 1);

    const images = [product.image, product.image, product.image];

    const relatedProducts = products.filter(
        (p) => p.category === product.category && p._id !== product._id
    );

    // Select related product dynamically
    const selectRelatedProduct = (p) => {
        setProduct(p);
        setSelectedImage(0);
        setQuantity(1);
        setRating(4);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const formatPrice = (price) => {
        return price.toLocaleString("en-BD");
    };


    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            <Toaster position="top-right" />

            {/* Breadcrumb */}
            <nav className="text-sm mb-4 text-gray-500">
                <Link to="/" className="hover:text-gray-800">Home</Link> &gt;{" "}
                <Link to="/products" className="hover:text-gray-800">Products</Link> &gt;{" "}
                <span className="text-gray-800">{product.name}</span>
            </nav>

            {/* Product Details */}
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <div className="overflow-hidden rounded-lg border">
                        <img
                            src={images[selectedImage]}
                            alt={product.name}
                            className="w-full h-[400px] object-cover transform transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="flex gap-2 mt-3">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="thumb"
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === idx ? "border-pink-500" : "border-gray-200"
                                    } hover:scale-105 transition-transform`}
                                onClick={() => setSelectedImage(idx)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">{product.name}</h1>
                    <div className="flex items-center gap-2">
                        {Array(5)
                            .fill(0)
                            .map((_, idx) =>
                                idx < rating ? (
                                    <FaStar
                                        key={idx}
                                        className="text-yellow-400 cursor-pointer hover:scale-110 transition-transform"
                                        onClick={() => handleRating(idx)}
                                    />
                                ) : (
                                    <FaRegStar
                                        key={idx}
                                        className="text-yellow-400 cursor-pointer hover:scale-110 transition-transform"
                                        onClick={() => handleRating(idx)}
                                    />
                                )
                            )}
                        <span className="text-gray-600 ml-2">{rating} / 5</span>
                    </div>

                    <p className="text-xl mt-2 text-pink-600 font-semibold">
                        MRP: Tk {formatPrice(product.price)}
                    </p>

                    <ul className="mt-4 text-gray-600 list-disc pl-5">
                        <li>Fresh & organic</li>
                        <li>Rich in vitamins</li>
                        <li>Farm quality</li>
                    </ul>

                    <div className="flex items-center gap-2 mt-4">
                        <button
                            onClick={() => handleQuantity("dec")}
                            className="px-3 py-1 border rounded shadow hover:bg-gray-100 transition"
                        >
                            -
                        </button>
                        <span className="px-4 py-1 border-t border-b">{quantity}</span>
                        <button
                            onClick={() => handleQuantity("inc")}
                            className="px-3 py-1 border rounded shadow hover:bg-gray-100 transition"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex gap-4 mt-6 flex-wrap">
                        <button
                            // onClick={() => addToCart({ ...product._id, quantity })}
                            onClick={() => addToCart({ ...product, quantity })}
                            className="px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => {
                                addToCart({ ...product, quantity });
                                navigate("/cart");
                            }}
                            // onClick={() => { addToCart(product._id); Navigate("/cart") }} 
                            className="px-6 py-3 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <div className="mt-16 ">
                    <div className="flex flex-col items-end w-max mb-4">

                        <h2 className="text-2xl font-medium uppercase text-black ">Related Products</h2>
                        <div className="w-16 h-0.5 bg-pink-600 rounded-full "></div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((p) => (
                            <div
                                key={p._id}
                                className="border rounded-lg border-none overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                                onClick={() => selectRelatedProduct(p)}
                            >
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform"
                                />
                                <div className="p-3">
                                    <h3 className="font-semibold">{p.name}</h3>
                                    <p className="text-pink-600 font-bold">Tk {formatPrice(p.price)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
