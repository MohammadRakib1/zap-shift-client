import ServiceCard from "./ServiceCard";


const Services = () => {

    const ourServices = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
            title: "Express & Standard Delivery",
            description:
                "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/4221/4221419.png",
            title: "Nationwide Delivery",
            description:
                "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
            highlight: true,
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/411/411763.png",
            title: "Fulfillment Solution",
            description:
                "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        },
        {
            icon: "https://i.ibb.co.com/Z6b9B5Xz/cash-on-delivery.png",
            title: "Cash on Home Delivery",
            description:
                "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/2920/2920052.png",
            title: "Corporate Service / Contract In Logistics",
            description:
                "Customized corporate services which includes warehouse and inventory management support.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/709/709790.png",
            title: "Parcel Return",
            description:
                "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        },
    ];


    return (
        <section className="bg-[#022b3a] text-white py-16 px-4 lg:mt-24 lg:rounded-xl">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Services</h2>
                <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero
                    hassle. From personal packages to business shipments — we deliver on
                    time, every time.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {ourServices.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;