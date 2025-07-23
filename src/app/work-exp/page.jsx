import Hero from "./_components/Hero";
import Highlights from "./_components/Highlights";
import Introduction from "./_components/Inroduction";
import Contributions from "./_components/Contributions"
import ContactForm from "./_components/ContactForm";
import ContactSection from "../../components/ContactSection";
import Journey from "./_components/Journey";

export default function WorkExperience(){
    return (
        <div>
            <Hero/>
            <Introduction/>
            <Journey/>
            <Highlights/>
            <Contributions/>
            <ContactSection/>
        </div>
    )
}