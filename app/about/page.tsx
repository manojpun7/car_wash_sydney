import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const AboutPage: React.FC = () => {
    return (
        <>
            <AboutUsSection />
            <TestimonialsSection />
            <ClientsSection />
            <BlogSection />
        </>
    )

}


export default AboutPage;