import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const [user, setUser] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const fetchProducts = async () => {
        setProducts(dummyProducts);
    };

    const addToCart = (itemId) => {
        let cartData = structuredClone ? structuredClone(cartItems) : { ...cartItems };

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
        toast.success("Added to the cart");
    };

    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone ? structuredClone(cartItems) : { ...cartItems };
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart Updated");
    };

    const removeFromCart = (itemId) => {
        let cartData = structuredClone ? structuredClone(cartItems) : { ...cartItems };

        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }

        setCartItems(cartData);
        toast.success("Remove from cart");
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    };

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (itemInfo && cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }

        return Math.floor(totalAmount * 100) / 100;
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        currency,
        addToCart,
        cartItems,
        updateCartItem,
        removeFromCart,
        searchQuery,
        setSearchQuery,
        getCartCount,
        getCartAmount
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used inside AuthContextProvider");
    }
    return context;
};
