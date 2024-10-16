import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "./Store/ModalSlice";

const Checkout = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert(`"Thank you: ${formData.name} for your purchase! Your order has been successfully placed and will be shipped to  ${formData.address} soon. We appreciate your business!.for more information please check ${formData.email}"`)
        dispatch(closeModal())
        console.log("Form Data Submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border-2 rounded-md mt-20 w-[90%] md:w-[50%]">
            <div className="flex justify-between">
                <h2 className="font-bold py-2">Checkout</h2>
                <button className="text-4xl hover:text-primary-orange" onClick={() => dispatch(closeModal())}>x</button>
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-orange focus:border-primary-orange sm:text-sm"
                    rows="3"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-primary-orange transition duration-200"
            >
                Submit
            </button>
        </form>
    );
};

export default Checkout;
