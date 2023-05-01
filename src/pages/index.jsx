import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Clients from "../components/Clients.jsx";
import Contact from "../components/Contact.jsx";
import BrandSlider from "../components/BrandSlider.jsx";
// import Image from "next/image";

// const brands = [
//     { alt: 'Akuvox', src: '/imgs/akuvox-logo.png' },
//     { alt: 'Fermax', src: '/imgs/fermax-logo.png' },
//     { alt: 'Dahua', src: '/imgs/dahua-logo.png' },
//     { alt: 'Cygnus', src: '/imgs/cygnus-logo.png' },
//     { alt: 'Surix', src: '/imgs/surix-logo.png' },
//     { alt: 'Golmar', src: '/imgs/golmar-logo.png' },
//     { alt: 'Commax', src: '/imgs/commax-logo.webp' },
//     { alt: 'Urmet', src: '/imgs/urmet-logo.png' }
// ]

const HomePage = () => {
    return (
        <div className='bg-slate-100 scroll-smooth'>
            <Navbar />
            <Hero />
            <BrandSlider />
            <div id='empresa' className='py-32 md:py-52'>
                <p className='w-9/12 mx-auto text-center font-medium text-2xl md:text-4xl lg:text-4xl leading-normal'>Desde hace 20 años solucionamos problemas en consorcios de edificios y torres.
                    Nos especializamos en la instalación y mantenimiento de porteros eléctricos, centrales
                    telefónicas y sistemas de cámaras de seguridad.</p>
            </div>
            <Services />
            {/*<div className='h-20 border-t border-b border-gray-600 overflow-hidden relative'>*/}
            {/*    <div className='w-[200%] flex items-center h-20 justify-around absolute left-0 animate animate'>*/}
            {/*        {brands.map((brand, i) => {*/}
            {/*            return (*/}
            {/*                <div key={i} className='flex justify-center items-center w-24 h-12'>*/}
            {/*                    <Image src={brand.src} alt={brand.alt} width={100} height={100} className='w-full' />*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*        {brands.map((brand, i) => {*/}
            {/*            return (*/}
            {/*                <div key={i} className='flex justify-center items-center w-24 h-12'>*/}
            {/*                    <Image src={brand.src} alt={brand.alt} width={100} height={100} className='w-full' />*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Clients />
            <Contact />
        </div>
    )
}

export default HomePage;