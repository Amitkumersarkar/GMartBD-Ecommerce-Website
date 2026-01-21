import { useState } from "react";

const SignIn = () => {
    const [state, setState] = useState('login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form
                onSubmit={handleSubmit}
                className="w-full sm:w-87.5 text-center bg-white border border-gray-200 rounded-2xl px-8 shadow"
            >
                <h1 className="text-gray-800 text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-gray-50 ring-1 ring-gray-200 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-gray-50 ring-1 ring-gray-200 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email id"
                        className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex items-center mt-4 w-full bg-gray-50 ring-1 ring-gray-200 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-4 text-left">
                    <button className="text-sm text-indigo-500 hover:underline">
                        Forget password?
                    </button>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <p
                    onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                    className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer"
                >
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-indigo-500 hover:underline ml-1">click here</span>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
