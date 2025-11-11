import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Awlad Hossin",
        title: "Senior Product Designer",
        feedback:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
        name: "Rasel Ahamed",
        title: "CTO",
        feedback:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
        name: "Nasir Uddin",
        title: "CEO",
        feedback:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
];

const TestimonialSection = () => {
    const [active, setActive] = useState(0);

    const nextSlide = () => setActive((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () =>
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Auto slide every 4s
    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full lg:py-16 pb-4 text-center overflow-hidden">
            {/* Header */}
            <div className="max-w-3xl mx-auto px-4 mt-14">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#303030] mb-2">
                    What our customers are saying
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* Testimonial Slider */}
            <div className="relative mt-12 flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex p-2 bg-white shadow-md rounded-full absolute left-6 md:left-12 hover:bg-gray-100 transition"
                >
                    <ArrowLeft size={20} />
                </button>

                {/* Carousel Wrapper */}
                <div className="flex items-center justify-center w-full overflow-hidden max-w-5xl px-4 relative">
                    <div className="hidden md:flex gap-6 justify-center items-center w-full">
                        {testimonials.map((item, index) => {
                            const isActive = index === active;
                            return (
                                <motion.div
                                    key={index}
                                    animate={{
                                        scale: isActive ? 1 : 0.9,
                                        opacity: isActive ? 1 : 0.4,
                                        y: isActive ? 0 : 30,
                                    }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className={`w-[300px] md:w-[320px] p-6 mb-2 md:p-8 rounded-2xl shadow-md ${isActive ? "bg-white" : "bg-gray-100"
                                        }`}
                                >
                                    <Quote className="text-teal-600 mx-auto mb-4" size={24} />
                                    <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                                        {item.feedback}
                                    </p>
                                    <hr className="w-1/2 mx-auto mb-4 border-gray-300" />
                                    <div>
                                        <p className="font-extrabold text-[#303030]">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.title}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile View (only one card visible) */}
                    <div className="flex md:hidden w-full mb-4 h-[260px] justify-center items-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute w-[85%] bg-white rounded-2xl shadow-md p-6"
                            >
                                <Quote className="text-teal-600 mx-auto mb-4" size={24} />
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {testimonials[active].feedback}
                                </p>
                                <hr className="w-1/2 mx-auto mb-4 border-gray-300" />
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {testimonials[active].name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonials[active].title}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="hidden md:flex p-2 bg-white shadow-md rounded-full absolute right-6 md:right-12 hover:bg-gray-100 transition"
                >
                    <ArrowRight size={20} />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-teal-600 w-4" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;