import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How does this posture corrector work?",
        answer:
            "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
        question: "Is it suitable for all ages and body types?",
        answer:
            "Yes! Our posture corrector is designed with adjustable straps and flexible materials, making it suitable for people of various ages, heights, and body shapes.",
    },
    {
        question: "Does it really help with back pain and posture improvement?",
        answer:
            "Absolutely. By gently aligning your spine and shoulders, it reduces muscle strain and helps retrain your posture over time, easing back pain naturally.",
    },
    {
        question: "Does it have smart features like vibration alerts?",
        answer:
            "Some advanced models include vibration alerts that notify you when you start to slouch, helping you build consistent posture habits effortlessly.",
    },
    {
        question: "How will I be notified when the product is back in stock?",
        answer:
            "You can sign up for restock alerts using your email on the product page. We’ll notify you instantly once it’s available again!",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 px-4 md:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-teal-800 mb-3">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-gray-600 mb-10 text-sm md:text-base">
                    Enhance posture, mobility, and well-being effortlessly with Posture
                    Pro. Achieve proper alignment, reduce pain, and strengthen your body
                    with ease!
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl bg-white overflow-hidden transition-all duration-300 ${openIndex === index ? "border-teal-500" : "border-gray-200"
                            }`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between w-full items-center p-4 text-left"
                        >
                            <span className="font-medium text-gray-800 text-sm md:text-base">
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openIndex === index && (
                            <div className="px-4 pb-4 text-gray-600 text-sm md:text-base">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition">
                    See More FAQ’s
                    <span className="bg-gray-900 text-white rounded-full p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
}