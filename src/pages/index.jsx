import Nav from "../components/navigation/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Clients from "../components/Clients.jsx";
import Contact from "../components/Contact.jsx";
import BrandSlider from "../components/BrandSlider.jsx";
import About from "../components/About.jsx";

const HomePage = () => {
    return (
        <div className='relative scroll-smooth'>
            <Nav />
            <Hero />
            <BrandSlider />
            <Clients />
            <About />
            <Services />
            <Contact />
        </div>
    )
}

export default HomePage;