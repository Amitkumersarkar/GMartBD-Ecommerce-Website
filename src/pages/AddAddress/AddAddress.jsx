import { assets } from "../../assets/assets";

// input field components
const inputField = (() => (
    <input type="text"></input>
))
const AddAddress = () => {

    return (
        <div className="mt-16 pb-16">
            <p className="text-2xl md:text-3xl text-gray-500">Add Shipping<span className="font-semibold text-pink-600"> Address </span></p>
            <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
                <div className="flex-1 max-w-md">

                </div>
                <img className="md:mr-16 mb-16 md:mt-0" src={assets.add_address_iamge} alt="address" />
            </div>
        </div>
    );
};

export default AddAddress;