import Nav from "../components/navigation/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Clients from "../components/Clients.jsx";
import Footer from "../components/Footer.jsx";
import BrandSlider from "../components/BrandSlider.jsx";
import About from "../components/About.jsx";
import HeadSeo from "../components/HeadSeo.jsx";

const HomePage = () => {
    return (
        <div className='relative scroll-smooth'>
            <HeadSeo title={'InterCom - Portero eléctrico y cámaras de seguridad IP'}
                     description={'Empresa de instalación y reparación de porteros eléctricos y cámaras de seguridad IP enfocados en edificios.'} />
            <Nav />
            <Hero />
            <BrandSlider />
            <Clients />
            <About />
            <Services />
            <Footer />
        </div>
    )
}

export default HomePage;