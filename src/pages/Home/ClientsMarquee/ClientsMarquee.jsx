import Marquee from "react-fast-marquee";

// ✅ Import all images
import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import moonstar from "../../../assets/brands/moonstar.png";
import start from "../../../assets/brands/start.png";
import startpeople from "../../../assets/brands/start-people 1.png";
import randstad from "../../../assets/brands/randstad.png";

const ClientsMarquee = () => {
    const clients = [
        { name: "Casio", src: casio },
        { name: "Amazon", src: amazon },
        { name: "Moonstar", src: moonstar },
        { name: "Star", src: start },
        { name: "Start-People", src: startpeople },
        { name: "Randstad", src: randstad },
    ];

    return (
        <section className="py-12 lg:mt-24">
            {/* Heading */}
            <h2 className="text-center text-xl md:text-2xl font-extrabold text-teal-800 mb-10">
                We’ve helped thousands of sales teams
            </h2>

            {/* Scrolling logo section */}
            <Marquee gradient={false} speed={30} pauseOnHover={true}>
                <div className="flex items-center gap-16 px-6">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center hover:scale-105 transition-transform duration-300 lg:mx-6"
                        >
                            <img
                                src={client.src}
                                alt={client.name}
                                className="h-3 md:h-6 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </Marquee>

            {/* Dashed line */}
            <div className="lg:mt-28 mt-10 w-11/12 mx-auto border-t border-dashed border-gray-400"></div>
        </section>
    );
};

export default ClientsMarquee;