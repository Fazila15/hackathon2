import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CardSection from "./components/CardSection";
import ProductsSection from './components/ProductsSection';
import SectionTwo from "./components/Section2";
import SignupSection from "./components/SignupSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardSection />
      <ProductsSection />
      <SectionTwo />
      <SignupSection />
      <Footer />
    
    </div>
  );
}
