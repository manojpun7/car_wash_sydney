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
      <HeroSection />


      <AboutUsSection />


      <ServicesSection />


      <WhyChooseUsSection />

      <TestimonialsSection />


      <ClientsSection />
      <HowItWorksSection />


      <BlogSection />

      <ServiceAreaSection />


      <FaqSection />


    </div>
  );
}