

const ServiceCard = ({ service }) => {

    const { icon: Icon, title, description } = service;

    return (
        <div
            className={`rounded-2xl shadow-md p-8 text-gray-800 transition duration-300 flex flex-col items-center justify-start text-center ${service.highlight
                ? "bg-white hover:bg-lime-200 hover:shadow-xl hover:-translate-y-1"
                : "bg-white hover:bg-lime-200 hover:shadow-xl hover:-translate-y-1"
                }`}
        >
            {/* Icon */}
            <div className="bg-orange-100 p-4 rounded-full mb-4">
                <img src={Icon} alt={service.title} className="w-10 h-10" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 text-teal-800">{title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;
