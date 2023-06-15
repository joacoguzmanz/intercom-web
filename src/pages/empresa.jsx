import Nav from "../components/navigation/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Image from "next/image";

const Empresa = () => {
    return (
        <>
            <Nav />
            <div className='pt-60 mx-5 md:mx-20'>
                <h2>El titulo</h2>
                <h4>Pequeño subtitulo voy a agregar acá. Este es solo de prueba.</h4>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-5 lg:grid-rows-2 gap-4 lg:gap-x-5'>
                    <div className='col-span-1 row-span-1 bg-gray-400 rounded-2xl h-52 lg:h-96 lg:mt-10'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} width={500} height={500} className='h-full rounded-xl md:w-full' />
                    </div>
                    <div className='col-span-1 row-span-1 bg-gray-400 rounded-2xl h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} width={500} height={500} className='h-full rounded-xl md:w-full' />
                    </div>
                    <div className='col-span-2 md:col-span-1 row-span-1 bg-[#92C5FD] rounded-2xl h-52 lg:h-96 lg:mt-32 flex flex-col justify-between p-6'>
                        <p>20 años</p><p>de trayectoria</p>
                    </div>
                    <div className='col-span-1 row-span-1 bg-gray-400 rounded-2xl h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} width={500} height={500} className='h-full rounded-xl md:w-full' />
                    </div>
                    <div className='col-span-1 row-span-1 bg-gray-400 rounded-2xl h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} width={500} height={500} className='h-full rounded-xl md:w-full' />
                    </div>
                    <div className='col-span-1 row-span-1 bg-[#28E09A] rounded-2xl h-52 lg:h-96 flex flex-col justify-between p-6'>
                        <p>2000+ trabajos</p><p>en los últimos 3 años</p>
                    </div>
                    <div className='col-span-1 row-span-1 bg-[#FE9314] rounded-2xl h-52 lg:h-96 flex flex-col justify-between p-6'>
                        <p>Más de 40 años</p><p>Dejame y te consulto</p>
                    </div>
                    <div className='col-span-2 md:col-span-1 row-span-1 bg-gray-400 rounded-2xl h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} width={500} height={500} className='h-full rounded-xl md:w-full' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Empresa;