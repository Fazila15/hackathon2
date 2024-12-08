import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"
import ProductHero from "../components/Product-Hero"
import ProductsSection from "../components/ProductsSection"
import SectionTwo from "../components/Section2"
import Signup from "../components/Signup"
import TopBar from "../components/Top-Bar"

export default function ProductPage () {
    return (
        <div>
        <TopBar/>
        <Navbar2/>
        <ProductHero />
        <div className="px-6 md:px-12 lg:px-24 py-8">
      <h1 className="font-normal leading-[24.6px] text-[20px] md:text-[28px] lg:text-[32px] lg:leading-[39.36px]  text-[#2A254B] mb-8">
      You might also like
      </h1>
      <ProductsSection />
      <SectionTwo/>
      <Signup/>
      <Footer/>
    </div>
        </div>
    )
}