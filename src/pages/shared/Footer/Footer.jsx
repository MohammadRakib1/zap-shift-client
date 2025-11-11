import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ProFastLogo from "../ProFastLogo/ProFastLogo";

const Footer = () => {
    return (
        <footer className="bg-black lg:rounded-t-2xl text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto text-center space-y-6">
                {/* Logo */}
                <div className="flex justify-center items-center space-x-2">
                    <div>
                        <ProFastLogo></ProFastLogo>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-2xl mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero
                    hassle. From personal packages to business shipments — we deliver on
                    time, every time.
                </p>

                <hr className="border-gray-700" />

                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-400">
                    <li className="hover:text-lime-400 transition">Services</li>
                    <li className="hover:text-lime-400 transition">Coverage</li>
                    <li className="hover:text-lime-400 transition">About Us</li>
                    <li className="hover:text-lime-400 transition">Pricing</li>
                    <li className="hover:text-lime-400 transition">Blog</li>
                    <li className="hover:text-lime-400 transition">Contact</li>
                </ul>

                <hr className="border-gray-700" />

                {/* Social Icons */}
                <div className="flex justify-center space-x-5">
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-lime-500 hover:text-black transition"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-lime-500 hover:text-black transition"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-lime-500 hover:text-black transition"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-lime-500 hover:text-black transition"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;