import Nav from "../components/navigation/Nav.jsx";
import Footer from "../components/Footer.jsx";
import HeadSeo from "../components/HeadSeo.jsx";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBrain,
    faHandshake,
    faAward,
    faMagnifyingGlass,
    faUserCheck,
    faClock,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

const Empresa = () => {
    return (
        <>
            <HeadSeo
                title={'InterCom - Sobre nosotros'}
                description={'Empresa especializada en la atención de consorcios'} />

            <Nav />

            <header className='h-[60vh] flex flex-col justify-center items-center mx-5 gap-2.5 md:gap-5 pt-10'>
                <p className='border border-primary text-xs text-primary uppercase tracking-wider px-4 py-1 rounded-full'>Sobre nosotros</p>
                <h1 className='text-center font-semibold text-3xl md:text-6xl'>Más de 20 años de historia y experiencia</h1>
            </header>

            <section className='bg-orange-100 py-20 px-5 lg:py-40 lg:px-20'>
                <div className='flex flex-col items-center gap-y-5'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>Hacemos la diferencia</h1>
                    <p className='text-lg lg:text-xl md:text-center mb-10'>Somos una empresa familiar con un vasta experiencia en porteros eléctricos,
                        cámaras de seguridad y telefonía para consorcios.</p>
                </div>

                <div className='grid grid-cols-2 sm:block sm:columns-2 md:columns-3 lg:columns-4 gap-x-5 md:gap-x-8'>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96 sm:first:mt-20'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='inline-block w-full mt-5'>
                        <div className='bg-blue-300 relative rounded-xl p-6 sm:p-8 lg:py-[60%] h-full flex flex-col'>
                            <p className='lg:absolute lg:top-8 lg:inset-x-8 mb-4 lg:mb-0 text-2xl font-medium md:text-3xl md:font-semibold'>Más de 400</p>
                            <p className='mt-auto lg:absolute lg:bottom-8 lg:inset-x-8 font-medium md:text-2xl'>consorcios atendidos</p>
                        </div>
                    </div>
                    <div className='col-span-2 inline-block w-full mt-5'>
                        <div className='bg-green-300 relative rounded-xl p-6 sm:p-8 lg:py-[60%] h-full flex flex-col'>
                            <p className='lg:absolute lg:top-8 lg:inset-x-8 mb-4 lg:mb-0 text-2xl font-medium md:text-3xl md:font-semibold'>20 años</p>
                            <p className='mt-auto lg:absolute lg:bottom-8 lg:inset-x-8 font-medium md:text-2xl'>de trayectoria</p>
                        </div>
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96 [&:nth-child(5)]:xl:mt-36'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='col-span-2 inline-block w-full mt-5 order-last [&:nth-last-child(2)]:xl:mt-24'>
                        <div className='bg-amber-300 relative rounded-xl p-6 sm:p-8 lg:py-[60%] h-full flex flex-col'>
                            <p className='lg:absolute lg:top-8 lg:inset-x-8 mb-4 lg:mb-0 text-2xl font-medium md:text-3xl md:font-semibold'>Más de 30</p>
                            <p className='mt-auto lg:absolute lg:bottom-8 lg:inset-x-8 font-medium md:text-2xl'>administraciones nos eligen cada día</p>
                        </div>
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                </div>
            </section>

            <section className='py-20 px-5 lg:py-40 lg:px-20'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5'>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faBrain} className='text-primary bg-orange-200 p-3.5 rounded-full mb-3' />
                        <h4 className='text-lg font-medium mb-3'>Capacitación constante</h4>
                        <p>Ampliamos nuestros conocimientos constantemente para ofrecer siempre la mejor solución</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faHandshake} className='text-primary bg-orange-200 p-3.5 rounded-full mb-3' />
                        <h4 className='text-lg font-medium mb-3'>Alianzas estratégicas</h4>
                        <p>Buscamos a los proveedores más confiables para asegurar la mejor calidad y precio posible</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-primary bg-orange-200 p-3.5 rounded-full mb-3' />
                        <h4 className='text-lg font-medium mb-3'>Atención al detalle</h4>
                        <p>Un buen trabajo no solo funciona pero se ve bien, no hay lugar para cables sueltos por cualquier lado</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faUserCheck} className='text-primary bg-orange-200 p-3.5 rounded-full mb-3' />
                        <h4 className='text-lg font-medium mb-3'>Satisfacción del cliente</h4>
                        <p>Asesoramos a los consorcios para garantizar un trabajo que deje conforme a los propietarios</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faGlobe} className='text-primary bg-orange-200 p-3.5 rounded-full mb-3' />
                        <h4 className='text-lg font-medium mb-3'>Amplia gama de marcas</h4>
                        <p>Trabajamos tanto con marcas nacionales como importadas, un gran abanico de tecnologías</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faClock} className='text-primary bg-orange-200 p-3.5 rounded-full mb-3' />
                        <h4 className='text-lg font-medium mb-3'>Respuesta rápida</h4>
                        <p>Respondemos a la brevedad y solucionamos los problemas lo antes posible</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <FontAwesomeIcon icon={faAward} className='text-primary bg-orange-200 p-3.5 rounded-full mb-3' />
                        <h4 className='text-lg font-medium mb-3'>Marcas de primera calidad</h4>
                        <p>Nos gusta trabajar con productos buenos y duraderos. </p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className='border p-5 rounded-2xl'>
                        <h4 className='text-lg font-medium mb-3'>Marcas de primera calidad</h4>
                        <p>Nos gusta trabajar con productos buenos y duraderos. </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Empresa;