import Nav from "../components/navigation/Nav.jsx";
import Footer from "../components/Footer.jsx";
import HeadSeo from "../components/HeadSeo.jsx";
import Image from "next/image";

const Servicios = () => {
    return (
        <div>
            <HeadSeo
                title={'InterCom - Servicios'}
                description={'Empresa especializada en la atención de consorcios'} />
            <Nav />

            <header className='h-[60vh] flex flex-col justify-center items-center mx-5 gap-2.5 md:gap-5 pt-32 md:pt-10'>
                <p className='border border-primary text-xs text-primary uppercase tracking-wider px-4 py-1 rounded-full'>Servicios</p>
                <h1 className='text-center font-semibold text-3xl md:text-6xl md:max-w-5xl md:leading-tight'>Ofrecemos servicios especializados
                    para edificios</h1>
            </header>

            <section className='py-10 px-5 lg:pb-40 lg:px-20'>
                <div className='w-full'>
                    <h3 className='text-2xl md:text-4xl font-medium mb-5 md:mb-8'>Porteros eléctricos IP</h3>
                </div>
                <div className='flex flex-col md:flex-row md:justify-center md:gap-10'>
                    <div className='relative w-full md:w-5/12 h-64 md:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill={true} style={{objectFit:"cover"}} className='rounded-lg' />
                    </div>
                    <div className='md:mb-10 md:text-lg md:w-5/12'>
                        <p className='mt-5 mb-3'>Los porteros IP presentan numerosos beneficios para los consorcios.</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-2.5'>Ahorro en gastos de mantenimiento</li>
                            <li className='mb-2.5'>Recepción de llamados en celular o tablet</li>
                            <li className='mb-2.5'>Garantía 6 meses</li>
                        </ul>
                        <p>Trabajamos principalmente con Fermax, Akuvox, Surix</p>
                    </div>
                </div>
            </section>

            <section className='py-10 px-5 lg:pb-40 lg:px-20'>
                <div className='w-full'>
                    <h3 className='text-2xl md:text-4xl font-medium mb-5 md:mb-8'>Cámaras de seguridad</h3>
                </div>
                <div className='flex flex-col md:flex-row md:justify-center md:gap-10'>
                    <div className='relative w-full md:w-5/12 h-64 md:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill={true} style={{objectFit:"cover"}} className='rounded-lg' />
                    </div>
                    <div className='md:mb-10 md:text-lg md:w-5/12'>
                        <p className='mt-5 mb-3'>Monitoreo en tiempo real desde cualquier lugar. Instalación de sistemas de cámaras IP o convencionales conectados a internet</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-2.5'>Cámaras Full HD Dahua primera calidad</li>
                            <li className='mb-2.5'>Conexión a las cámaras por internet desde cualquier lugar</li>
                            <li className='mb-2.5'>Hasta 30 días de grabaciones guardados</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-10 px-5 lg:pb-40 lg:px-20'>
                <div className='w-full'>
                    <h3 className='text-2xl md:text-4xl font-medium mb-5 md:mb-8'>Porteros Eléctricos</h3>
                </div>
                <div className='flex flex-col md:flex-row md:justify-center md:gap-10'>
                    <div className='relative w-full md:w-5/12 h-64 md:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill={true} style={{objectFit:"cover"}} className='rounded-lg' />
                    </div>
                    <div className='md:mb-10 md:text-lg md:w-5/12'>
                        <p className='mt-5 mb-3'>Nuestro mayor área de experiencia se encuentra en este tipo de porteros. Llevamos
                        más de 20 años proveyendo soluciones a distintos consoricos de la Ciudad de Buenos Aires</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-2.5'>Instalación de paneles  de pulsadores nuevos de portero</li>
                            <li className='mb-2.5'>Reparaciones generales de edificios</li>
                            <li className='mb-2.5'>Planes de mantenimiento mensual</li>
                        </ul>
                        <p>No dudes en consultanos</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Servicios;