import About from "@/components/About";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import OurCoreValuesSection from "@/components/OurCoreValuesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const AboutPage: React.FC = () => {
    return (
        <>
            <About />
            <AboutWhyChoose />
            <TestimonialsSection />
            <OurCoreValuesSection />
            <ClientsSection />
            <BlogSection />
        </>
    )

}


export default AboutPage;