import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { assets, dummyOrders } from "../../../assets/assets";

const Orders = () => {
    const { currency } = useAuthContext();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(dummyOrders || []);
    }, []);

    return (
        <div className="flex-1 h-[95vh] overflow-y-auto">
            <div className="md:p-10 p-4 space-y-6">
                <h2 className="text-2xl font-semibold">Orders List</h2>

                {orders.length === 0 ? (
                    <p className="text-gray-500">No orders found.</p>
                ) : (
                    orders.map((order, orderIndex) => (
                        <div
                            key={order._id || orderIndex}
                            className="flex flex-col md:grid md:grid-cols-[2fr_1.5fr_1fr_1.5fr] gap-6 p-6 rounded-lg border border-gray-200 shadow-sm bg-white"
                        >
                            {/* Products Section */}
                            <div className="flex gap-4">
                                <img
                                    className="w-14 h-14 object-contain"
                                    src={assets.box_icon}
                                    alt="box icon"
                                />

                                <div className="flex flex-col gap-2">
                                    {order.items?.map((item, itemIndex) => (
                                        <p key={itemIndex} className="font-medium text-gray-800">
                                            {item.product?.name}
                                            <span className="text-pink-600 ml-2">
                                                x {item.quantity}
                                            </span>
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className="text-sm text-gray-600 space-y-1">
                                <p className="font-medium text-gray-800">
                                    {order.address?.firstName} {order.address?.lastName}
                                </p>
                                <p>
                                    {order.address?.street}, {order.address?.city}
                                </p>
                                <p>
                                    {order.address?.state}, {order.address?.zipcode},{" "}
                                    {order.address?.country}
                                </p>
                                <p>Phone: {order.address?.phone}</p>
                            </div>

                            {/* Amount Section */}
                            <div className="flex items-center">
                                <p className="text-lg font-semibold">
                                    {currency} {order.amount}
                                </p>
                            </div>

                            {/* Payment Info Section */}
                            <div className="flex flex-col justify-center text-sm space-y-1">
                                <p>
                                    Method:{" "}
                                    <span className="font-medium">{order.paymentType}</span>
                                </p>
                                <p>
                                    Date:{" "}
                                    {order.createdAt
                                        ? new Date(order.createdAt).toLocaleDateString()
                                        : "N/A"}
                                </p>
                                <p>
                                    Payment:{" "}
                                    <span
                                        className={`font-medium ${order.isPaid ? "text-green-600" : "text-red-500"
                                            }`}
                                    >
                                        {order.isPaid ? "Paid" : "Pending"}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Orders;