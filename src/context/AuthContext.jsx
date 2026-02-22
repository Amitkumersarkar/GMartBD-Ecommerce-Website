import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY;

    /* Auth State */
    const [user, setUser] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);

    /* Product & Cart State */
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    /* Helper function */
    const cloneCart = () =>
        typeof structuredClone === "function"
            ? structuredClone(cartItems)
            : { ...cartItems };

    /* Dummy Products*/
    const fetchProducts = async () => {
        setProducts(dummyProducts);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    /* Cart Actions */
    const addToCart = (itemId) => {
        const cartData = cloneCart();
        cartData[itemId] = (cartData[itemId] || 0) + 1;
        setCartItems(cartData);
        toast.success("Added to cart");
    };

    const removeFromCart = (itemId) => {
        const cartData = cloneCart();

        if (!cartData[itemId]) return;

        if (cartData[itemId] === 1) {
            delete cartData[itemId];
        } else {
            cartData[itemId] -= 1;
        }

        setCartItems(cartData);
        toast.success("Removed from cart");
    };

    // prevents spam
    const updateCartItem = (itemId, quantity) => {
        const cartData = cloneCart();

        if (quantity <= 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }

        setCartItems(cartData);
    };

    /* Cart Calculations */
    const getCartCount = () => {
        return Object.values(cartItems).reduce(
            (total, qty) => total + qty,
            0
        );
    };

    const getCartAmount = () => {
        let total = 0;

        for (const itemId in cartItems) {
            const product = products.find(
                (p) => p._id === itemId
            );

            if (product) {
                total += product.offerPrice * cartItems[itemId];
            }
        }

        return Math.round(total * 100) / 100;
    };

    /* Context Value*/
    const value = {
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        currency,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
        getCartCount,
        getCartAmount,
        searchQuery,
        setSearchQuery,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

/*Custom Hook*/
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuthContext must be used inside AuthContextProvider"
        );
    }

    return context;
};