import React from 'react';
import locationMerchant from '../../../assets/banner/location-merchant.png'

const BeMerchant = () => {
    return (
        <div className="bg-[#013C43] text-white lg:rounded-2xl p-8 md:p-12 flex flex-col lg:mt-20 mt-10 md:flex-row justify-between items-center gap-10 overflow-hidden relative">
            {/* Left Section */}
            <div className="max-w-lg z-10">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-snug">
                    Merchant and Customer Satisfaction <br /> is Our First Priority
                </h2>
                <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                    We offer the lowest delivery charge with the highest value along with
                    100% safety of your product. Profast courier delivers your parcels in
                    every corner of Bangladesh right on time.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                    <button className="bg-[#D5FF63] text-black font-bold px-6 py-2 rounded-full hover:bg-lime-300 transition">
                        Become a Merchant
                    </button>
                    <button className="border border-[#D5FF63] text-[#D5FF63] font-bold px-6 py-2 rounded-full hover:bg-[#D5FF63] hover:text-black transition">
                        Earn with Profast Courier
                    </button>
                </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
                {/* Wave effect background */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#005E63]/30 to-transparent blur-2xl"></div>

                {/* Box Illustration */}
                <img src={locationMerchant} alt="" />
            </div>
        </div>
    );
};

export default BeMerchant;