import Banner from "../Banner/Banner";
import BeMerchant from "../BeMerchant/BeMerchant";
import Benefits from "../Benefits/Benefits";
import ClientsMarquee from "../ClientsMarquee/ClientsMarquee";
import FAQSection from "../FAQSection/FAQSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import Services from "../Services/Services";
import TestimonialSection from "../TestimonialSection/TestimonialSection";


const Home = () => {
    return (
        <div className="lg:mt-10">
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <ClientsMarquee></ClientsMarquee>
            <Benefits></Benefits>
            <BeMerchant></BeMerchant>
            <TestimonialSection></TestimonialSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;