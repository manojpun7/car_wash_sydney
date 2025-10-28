// app/page.tsx

import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import ClientsSection from "@/components/ClientsSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ServicesSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
// ... import other sections ...

export default function Home() {
  return (
    <div className="bg-zinc-50 font-medium text-black">
      {/* Home Section */}
      <div id="home"> 
        <HeroSection />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutUsSection />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      <WhyChooseUsSection />

      {/* Reviews/Testimonials Section */}
      <div id="reviews"> 
        <TestimonialsSection />
      </div>

      <ClientsSection />
      <HowItWorksSection />
      
      {/* Blog and other sections don't have nav links, but Service Area and FAQ do. */}
      
      <BlogSection />

      {/* Service Areas Section */}
      <div id="areas"> 
        <ServiceAreaSection />
      </div>

      {/* FAQ Section */}
      <div id="faq"> 
        <FaqSection />
      </div>
      
      {/* Assuming 'Contact' button links to a Request Quote/Footer section */}
      <div id="contact"> 
        {/* You might place a RequestQuoteForm or Footer here */}
      </div>
    </div>
  );
}