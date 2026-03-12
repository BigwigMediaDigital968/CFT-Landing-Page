import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import LeadForm from "./component/LearForm/LeadForm";
import Carousel from "./component/Crousel";
import WhyTrade from "./component/WhyTrade";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LeadForm />
      <Carousel />
      <WhyTrade />
      <Footer />
    </>
  );
}
