import Hero from './components/Hero';
import PartnerLogos from './components/PartnerLogos';
import AboutShort from './components/AboutShort';
import ServiceShort from './components/ServiceShort';
import ContactSection from './components/ContactSection'; 
import WhyChooseUs from './components/WhyChooseUs';// Component အသစ်ကို Import လုပ်ပါ
import IndustriesWeServe from './components/IndustriesWeServe';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <AboutShort />
      <ServiceShort />
      <WhyChooseUs/>
      
       <PartnerLogos />
      <IndustriesWeServe/>
      
      {/* Home Page အတွက် သီးသန့် Section */}
      <ContactSection /> 
    </main>
  );
}