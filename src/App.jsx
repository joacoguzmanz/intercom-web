import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Clients from "./components/Clients.jsx";
import Contact from "./components/Contact.jsx";

const brands = [
    { name: 'Akuvox', image: '/public/imgs/akuvox-logo.png' },
    { name: 'Fermax', image: '/public/imgs/fermax-logo.png' },
    { name: 'Dahua', image: '/public/imgs/dahua-logo.png' },
    { name: 'Cygnus', image: '/public/imgs/cygnus-logo.png' },
    { name: 'Surix', image: '/public/imgs/surix-logo.png' },
    { name: 'Golmar', image: '/public/imgs/golmar-logo.png' },
    { name: 'Commax', image: '/public/imgs/commax-logo.webp' },
    { name: 'Urmet', image: '/public/imgs/urmet-logo.png' }
]

function App() {
  return (
      <div className='bg-slate-100 scroll-smooth'>
          <Navbar />
          <Hero />
          <div id='empresa' className='py-32 md:py-52'>
              <p className='w-9/12 mx-auto text-center font-medium text-2xl md:text-4xl lg:text-4xl leading-normal'>Desde hace 20 años solucionamos problemas en consorcios de edificios y torres.
                  Nos especializamos en la instalación y mantenimiento de porteros eléctricos, centrales
                  telefónicas y sistemas de cámaras de seguridad.</p>
          </div>
          <Services />
          {/* Slider */}
          <div className='w-[100%] h-20 border-t border-b border-gray-600 overflow-hidden relative'>
              <div className='w-[100%] overflow-hidden flex items-center h-20 justify-around absolute left-0 animate gap-20 animate'>
                  {brands.map((brand, i) => {
                      return (
                          <div key={i} className='flex justify-center items-center w-24 h-12'>
                              <img src={brand.image} alt={brand.name} className='w-full' />
                          </div>
                      )
                  })}
                  {brands.map((brand, i) => {
                      return (
                          <div key={i} className='flex justify-center items-center w-24 h-12'>
                              <img src={brand.image} alt={brand.name} className='w-full' />
                          </div>
                      )
                  })}
              </div>
          </div>
          <Clients />
          <Contact />
      </div>
  )
}

export default App
