import { useState, useRef } from "react";
import toast from "react-hot-toast";

const SignIn = () => {
    const [state, setState] = useState("login");
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const name = form.name?.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (state !== "login" && !name) {
            toast.error("Name is required");
            return;
        }

        if (!email) {
            toast.error("Email is required");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Invalid email format");
            return;
        }

        if (!password) {
            toast.error("Password is required");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        toast.success(
            state === "login" ? "Login successful!" : "Account created successfully!"
        );

        console.log({ name, email, password });
        form.reset();
    };

    const toggleState = () => {
        setState((prev) => (prev === "login" ? "register" : "login"));
        formRef.current?.reset();
    };

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center bg-black/60 text-sm text-gray-600">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-8 py-12 w-96 sm:w-[400px] md:w-[450px] text-gray-600 bg-gray-900 rounded-lg"
            >
                <h1 className="text-pink-600 text-3xl text-center font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-cyan-400 text-center font-sans font-semibold text-sm mt-2">
                    {state === "login"
                        ? "Please sign in to continue"
                        : "Create your account to continue"}
                </p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-gray-800 border border-gray-700 h-12 rounded-full pl-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            autoComplete="name"
                            className="w-full bg-transparent text-white outline-none"
                        />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-gray-800 border border-gray-700 h-12 rounded-full pl-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        className="w-full bg-transparent text-white outline-none"
                    />
                </div>

                <div className="flex items-center mt-4 w-full bg-gray-800 border border-gray-700 h-12 rounded-full pl-6">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="w-full bg-transparent text-white outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500"
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <button
                    type="button"
                    onClick={toggleState}
                    className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
                >
                    {state === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    <span className="text-indigo-400 ml-1">Click here</span>
                </button>
            </form>
        </div>
    );
};

export default SignIn;
