import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { dummyOrders } from "../../assets/assets";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { currency } = useAuthContext();

    const fetchMyOrders = () => {
        setMyOrders(dummyOrders);
    };

    useEffect(() => {
        fetchMyOrders();
    }, []);

    return (
        <div className="mt-16 pb-16">
            <div className="flex flex-col items-end w-max mb-8">
                <p className="text-2xl font-medium uppercase">My Orders</p>
                <div className="w-16 h-0.5 bg-pink-600 rounded-full"></div>
            </div>

            {myOrders.length === 0 && (
                <p className="text-center text-gray-500">No orders found</p>
            )}

            {myOrders.map((order, orderIndex) => (
                <div
                    key={orderIndex}
                    className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
                >
                    <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col gap-2">
                        <span>Order ID : {order._id}</span>
                        <span>Payment : {order.paymentType}</span>
                        <span>
                            Total Amount : {currency} {order.amount}
                        </span>
                    </p>

                    {order.items.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mt-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-pink-600/10 p-4 rounded-lg">
                                    <img
                                        className="w-16 h-16 object-cover"
                                        src={item.product.image[0]}
                                        alt={item.product.name}
                                    />
                                </div>
                                <div>
                                    <h2 className="text-lg font-medium text-gray-800">
                                        {item.product.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Category : {item.product.category}
                                    </p>
                                </div>
                            </div>

                            <div className="text-pink-600 text-sm font-medium">
                                <p>Quantity : {item.quantity ?? 1}</p>
                                <p>Status : {order.status}</p>
                                <p>
                                    Date :{" "}
                                    {new Date(
                                        order.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <p className="text-pink-600 text-lg font-medium">
                                Amount : {currency}
                                {item.product.offerPrice *
                                    (item.quantity ?? 1)}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MyOrders;
