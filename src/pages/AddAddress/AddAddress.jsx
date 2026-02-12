import { useState } from "react";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
    <input
        className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-pink-600 transition"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
    />
);

const AddAddress = () => {
    const initialAddress = {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        phone: "",
    };

    const [address, setAddress] = useState(initialAddress);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("Saved address:", address);

        toast.success("Address saved successfully!");

        setAddress(initialAddress);
    };

    return (
        <div className="mt-16 pb-16">
            <p className="text-2xl md:text-3xl text-gray-500">
                Add Shipping
                <span className="font-semibold text-pink-600"> Address </span>
            </p>

            <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
                <div className="flex-1 max-w-md">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 mt-6 text-sm"
                    >
                        <InputField
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            address={address}
                            handleChange={handleChange}
                        />
                        <InputField
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            address={address}
                            handleChange={handleChange}
                        />
                        <InputField
                            type="text"
                            placeholder="Street Address"
                            name="street"
                            address={address}
                            handleChange={handleChange}
                        />
                        <InputField
                            type="text"
                            placeholder="City"
                            name="city"
                            address={address}
                            handleChange={handleChange}
                        />
                        <InputField
                            type="text"
                            placeholder="State"
                            name="state"
                            address={address}
                            handleChange={handleChange}
                        />
                        <InputField
                            type="text"
                            placeholder="ZIP Code"
                            name="zipCode"
                            address={address}
                            handleChange={handleChange}
                        />
                        <InputField
                            type="text"
                            placeholder="Country"
                            name="country"
                            address={address}
                            handleChange={handleChange}
                        />
                        <InputField
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            address={address}
                            handleChange={handleChange}
                        />

                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
                        >
                            Save Address
                        </button>
                    </form>
                </div>

                <img
                    className="md:mr-16 mb-16 md:mt-0 max-w-sm"
                    src={assets.add_address_iamge}
                    alt="address"
                />
            </div>
        </div>
    );
};

export default AddAddress;
