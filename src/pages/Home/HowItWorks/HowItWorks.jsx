import bookingPick from '../../../assets/howToWorks/bookingPick.png';
import cashOnDelivery from '../../../assets/howToWorks/cashOnDelivery.png';
import deliveryHub from '../../../assets/howToWorks/deliveryHub.png';
import bookingSme from '../../../assets/howToWorks/bookingSme.png';

const steps = [
    {
        title: "Booking Pick & Drop",
        description:
            "Easily schedule your parcel pick-up from home or office and get doorstep delivery service with real-time tracking.",
        icon: bookingPick,
    },
    {
        title: "Cash On Delivery",
        description:
            "Deliver your products and receive payment directly from customers upon delivery — safe and reliable every time.",
        icon: cashOnDelivery,
    },
    {
        title: "Delivery Hub",
        description:
            "Our smart delivery hubs ensure your packages are sorted and dispatched efficiently across all regions.",
        icon: deliveryHub,
    },
    {
        title: "Booking SME & Corporate",
        description:
            "Dedicated logistics support for SMEs and corporate clients — bulk shipment, quick dispatch, and custom solutions.",
        icon: bookingSme,
    },
];


const HowItWorks = () => {
    return (
        <section className="py-10 px-5 lg:mt-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl text-[#03373D] font-extrabold mb-8">
                    How it Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:items-start lg:items-start items-center text-left hover:shadow-md transition"
                        >
                            <div className="p-3 mb-4">
                                <img src={step.icon} alt="" />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-teal-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-sm text-center md:text-left lg:text-left text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;