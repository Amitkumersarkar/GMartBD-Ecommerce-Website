import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { currency, axios, user } = useAuthContext();

    const fetchMyOrders = async () => {
        try {
            const { data } = await axios.get("/api/order/user");
            console.log("Fetched orders:", data);
            if (data.success) {
                setMyOrders(data.orders);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchMyOrders();
        }
    }, [user]);

    return (
        <div className="mt-16 pb-16">
            <div className="flex flex-col items-end w-max mb-8">
                <p className="text-2xl font-medium uppercase">My Orders</p>
                <div className="w-16 h-0.5 bg-pink-600 rounded-full"></div>
            </div>

            {myOrders.length === 0 && (
                <p className="text-center text-gray-500">No orders found</p>
            )}

            {myOrders.map((order) => (
                <div
                    key={order._id}
                    className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
                >
                    <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col gap-2">
                        <span>Order ID : {order._id}</span>
                        <span>Payment : {order.paymentType}</span>
                        <span>
                            Total Amount : {currency} {order.amount}
                        </span>
                    </p>

                    {order.items.map((item) => (
                        <div
                            key={item._id || item.product?._id}
                            className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mt-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-pink-600/10 p-4 rounded-lg">
                                    <img
                                        className="w-16 h-16 object-cover"
                                        src={item.product?.image?.[0] || "/placeholder.png"}
                                        alt={item.product?.name || "Product"}
                                    />
                                </div>
                                <div>
                                    <h2 className="text-lg font-medium text-gray-800">
                                        {item.product?.name || "Product Name"}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Category : {item.product?.category || "N/A"}
                                    </p>
                                </div>
                            </div>

                            <div className="text-pink-600 text-sm font-medium">
                                <p>Quantity : {item.quantity ?? 1}</p>
                                <p>Status : {order.status || "Pending"}</p>
                                <p>
                                    Date : {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <p className="text-cyan-700 text-lg font-medium">
                                Amount : {currency}{" "}
                                {item.product?.offerPrice * (item.quantity ?? 1) || 0}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MyOrders;