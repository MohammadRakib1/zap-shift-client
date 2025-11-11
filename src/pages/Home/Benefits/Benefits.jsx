import React from "react";
import trackingImg from "../../../assets/benefit/tracking.png";
import deliveryImg from "../../../assets/benefit/call.png";
import supportImg from "../../../assets/benefit/support.png";

const features = [
    {
        id: 1,
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
        image: trackingImg,
    },
    {
        id: 2,
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image: deliveryImg,
    },
    {
        id: 3,
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image: supportImg,
    },
];

const Benefits = () => {
    return (
        <section className="lg:py-14 px-4 sm:px-8 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="flex flex-col md:flex-row items-center bg-white border border-gray-300 hover:shadow-md transition-all rounded-2xl p-6 md:p-10"
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-40 h-40 md:w-48 md:h-48 object-contain"
                            />
                        </div>

                        {/* Dashed Line */}
                        <div className="hidden md:flex items-center justify-center px-6">
                            <div className="border-r-2 border-dashed border-gray-600 h-32"></div>
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-2/3 text-center md:text-left space-y-3">
                            <h3 className="text-2xl font-extrabold text-[#303030]">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;