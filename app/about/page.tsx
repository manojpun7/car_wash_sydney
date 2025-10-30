import About from "@/components/About";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import OurCoreValuesSection from "@/components/OurCoreValuesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const AboutPage: React.FC = () => {
    return (
        <>
            <About />

            <TestimonialsSection />
            <ClientsSection />
            <OurCoreValuesSection />
            <BlogSection />
        </>
    )

}


export default AboutPage;