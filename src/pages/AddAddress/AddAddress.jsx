import { assets } from "../../assets/assets";

// input field components
const inputField = ((type, placeholder, name, handleChange, address) => (
    <input className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-pink-600 transition"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
    ></input>
))
const AddAddress = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

    }
    return (
        <div className="mt-16 pb-16">
            <p className="text-2xl md:text-3xl text-gray-500">Add Shipping<span className="font-semibold text-pink-600"> Address </span></p>
            <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
                <div className="flex-1 max-w-md">
                    <form onSubmit={handleSubmit} address={address} name="firstName" type="text" placeholder="Fist Name" className="space-y-3 mt-6 text-sm">
                        <div className="">
                            <inputField handleChange={handleChange}></inputField>
                        </div>
                    </form>
                </div>
                <img className="md:mr-16 mb-16 md:mt-0" src={assets.add_address_iamge} alt="address" />
            </div>
        </div>
    );
};

export default AddAddress;