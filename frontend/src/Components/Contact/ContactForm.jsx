import React from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';
import { IoLeafOutline } from 'react-icons/io5';
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ContactForm = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100">
            {/* Left Form */}
            <form className=" mx-auto p-6 rounded-lg w-full max-w-lg lg:w-3/5 lg:mr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <textarea
                    placeholder="Message"
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Sign Up
                </button>
            </form>

            {/* Right Info Cards */}
            <div className=" w-10/12 mx-auto space-y-6 lg:w-2/5 lg:px-8 lg:ml-4">
                <div className="flex border-2 rounded-2xl p-2 transition duration-300 transform hover:scale-105 hover:border-golden">
                    <div className="w-1/4 px-4">
                        <RiAccountCircleFill className="text-5xl" />
                    </div>
                    <div className="w-3/4 space-y-2">
                        <h2 className="font-Bevas text-xl sm:text-xl font-bold lg:text-lg xl:text-xl">
                            Phone Number
                        </h2>
                        <p className="text-gray1 font-Aceh-Light sm:text-xl lg:text-base xl:text-lg">
                        +90 534 259 66 56
                        </p>
                    </div>
                </div>
                <div className="flex border-2 rounded-2xl p-2 bg-black transition duration-300 transform hover:scale-105 hover:border-golden">
                    <div className="w-1/4 px-4 py-2">
                        <MdOutlineEmail className="text-white text-5xl border-2 rounded-full p-2" />
                    </div>
                    <div className="w-3/4 space-y-2">
                        <h2 className="text-gray2 font-Bevas text-xl sm:text-xl font-bold lg:text-lg xl:text-xl">
                            Email Address
                        </h2>
                        <p className="text-white font-Aceh-Light sm:text-xl lg:text-base xl:text-lg">
                        info@gomilesinternational.com
                        </p>
                    </div>
                </div>
                <div className="flex border-2 rounded-2xl p-2 transition duration-300 transform hover:scale-105 hover:border-golden">
                    <div className="w-1/4 px-4 py-2">
                        <CiLocationOn className="text-5xl border-2 rounded-full p-2" />
                    </div>
                    <div className="w-3/4 space-y-2">
                        <h2 className="font-Bevas text-xl sm:text-xl font-bold lg:text-lg xl:text-xl">
                            Address
                        </h2>
                        <p className="font-Aceh-Light sm:text-xl lg:text-base xl:text-lg">
                        MECIDIYEKÖY МАН,SISLi/ iSTANBUL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
