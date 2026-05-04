import PartnerLogos from './components/PartnerLogos';
import AboutShort from './components/AboutShort';
import ServiceShort from './components/ServiceShort';
import ContactSection from './components/ContactSection'; 
import WhyChooseUs from './components/WhyChooseUs';// Component အသစ်ကို Import လုပ်ပါ
import IndustriesWeServe from './components/IndustriesWeServe';
import HeroC from './components/heroC';

export default function Home() {
  return (
    <main>
      <HeroC/>
      <PartnerLogos />
      <AboutShort />
      <ServiceShort />
      <WhyChooseUs/>
      
      
      <IndustriesWeServe/>
      
      {/* Home Page အတွက် သီးသန့် Section */}
      <ContactSection /> 
    </main>
  );
}