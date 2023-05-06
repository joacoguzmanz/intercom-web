import Nav from "../components/navigation/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Clients from "../components/Clients.jsx";
import Contact from "../components/Contact.jsx";
import BrandSlider from "../components/BrandSlider.jsx";

const HomePage = () => {
    return (
        <div className='relative scroll-smooth'>
            <Nav />
            <Hero />
            <BrandSlider />
            <div id='empresa' className='py-32 md:py-52'>
                <p className='w-9/12 mx-auto text-center font-medium text-2xl md:text-4xl lg:text-4xl leading-normal'>Desde hace 20 años solucionamos problemas en consorcios de edificios y torres.
                    Nos especializamos en la instalación y mantenimiento de porteros eléctricos, centrales
                    telefónicas y sistemas de cámaras de seguridad.</p>
            </div>
            <Services />
            <Clients />
            <Contact />
        </div>
    )
}

export default HomePage;