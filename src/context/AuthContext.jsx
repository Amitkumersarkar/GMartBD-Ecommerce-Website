import { createContext, useContext, useEffect, useState } from "react";
// import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY;

    const [user, setUser] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const cloneCart = () =>
        typeof structuredClone === "function"
            ? structuredClone(cartItems)
            : { ...cartItems };

    /* Seller Status */
    const fetchSellerStatus = async () => {
        try {
            const { data } = await axios.get('/api/seller/is-auth');
            if (data.success) {
                setIsSeller(true)
            } else {
                setIsSeller(false)
            }
        } catch (error) {
            setIsSeller(false)
        }
    }

    // fetch user auth status
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/is-auth');
            if (data.success) {
                setUser(data.user)
                setCartItems(data.user.cartItems || {})
            }
        } catch (error) {
            setUser(null)
        }
    }

    /* Fetch Products */
    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('/api/product/list')
            if (data.success) {
                setProducts(data.products)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchUser();
    }, []);

    // updated database cart items
    useEffect(() => {
        const updateCart = async () => {
            try {
                const { data } = await axios.post('/api/cart/update', { cartItems })
                if (!data.success)
                    toast.error(data.message)
            } catch (error) {
                toast.error(error.message)

            }
        }

        if (user) {
            updateCart()
        }
    }, [cartItems])


    const addToCart = (product, callback) => {
        setCartItems(prev => {
            const updated = { ...prev };
            updated[product._id] = (updated[product._id] || 0) + product.quantity;
            return updated;
        });

        if (callback) callback();
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

    const updateCartItem = (itemId, quantity) => {
        const cartData = cloneCart();

        if (quantity <= 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }

        setCartItems(cartData);
    };

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
        fetchProducts,
        fetchSellerStatus,
        fetchUser,
        axios
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
        throw new Error(
            "useAuthContext must be used inside AuthContextProvider"
        );
    }

    return context;
};