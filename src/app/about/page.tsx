import AboutSection from "../components/About-section";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import GetInTouch from "../components/Get-in-touch";
import Navbar3 from "../components/Navbar3";
import SectionTwo from "../components/Section2";
import Signup from "../components/Signup";
import TopBar from "../components/Top-Bar";

export default function About () {
    return (
        <div>
            <TopBar/>
            <Navbar3/>
            <AboutSection/>
            <SectionTwo/>
            <GetInTouch/>
            <CardSection/>
            <Signup/>
            <Footer/>
        </div>
    )
}