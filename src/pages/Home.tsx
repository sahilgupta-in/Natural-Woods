import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import Collections from "../components/Collections";
import BestSellers from "../components/BestSellers";
import CustomizeArt from "../components/CustomizeArt";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <main className="bg-[#F8F4EC]">
      {/* Hero Banner */}
      <Hero />


      {/* Shop by Collection */}
      <Collections />

      {/* Best Sellers */}
      <BestSellers />
      
      {/* Whu Choose */}
      <WhyChoose/>

      {/* About Natural Woods */}
      <HomeAbout />
      
      {/* Customer Testimonials */}
      <Testimonials />
      
      {/* Customize Your Wooden Art */}
      <CustomizeArt />

      
    </main>
  );
}