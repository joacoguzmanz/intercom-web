import Nav from "../components/navigation/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Image from "next/image";

const Empresa = () => {
    return (
        <>
            <Nav />

            <section className='lg:py-60 lg:px-20 pt-60 px-5'>
                <div className='flex flex-col items-center gap-y-5'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>Empresa</h1>
                    <p className='text-lg lg:text-2xl mb-10'>Lorem ipsum dolor sit amet consectetur adi pisicing elit. Quisquam, voluptatum.</p>
                </div>

                <div className='grid grid-cols-2 sm:block sm:columns-2 md:columns-3 lg:columns-4 gap-x-5 md:gap-x-8'>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96 sm:first:mt-24'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='inline-block w-full mt-5'>
                        <div className='bg-blue-300 relative rounded-xl p-6 sm:p-8 lg:py-[60%] h-full flex flex-col'>
                            <p className='lg:absolute lg:top-8 lg:inset-x-8 mb-4 lg:mb-0'>20 años</p>
                            <p className='mt-auto lg:absolute lg:bottom-8 lg:inset-x-8'>de trayectoria</p>
                        </div>
                    </div>
                    <div className='col-span-2 inline-block w-full mt-5'>
                        <div className='bg-green-300 relative rounded-xl p-6 sm:p-8 lg:py-[60%] h-full flex flex-col'>
                            <p className='lg:absolute lg:top-8 lg:inset-x-8 mb-4 lg:mb-0'>20 años</p>
                            <p className='mt-auto lg:absolute lg:bottom-8 lg:inset-x-8'>de trayectoria</p>
                        </div>
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96 [&:nth-child(5)]:xl:mt-52'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                    <div className='col-span-2 inline-block w-full mt-5 order-last [&:nth-last-child(2)]:xl:mt-32'>
                        <div className='bg-amber-300 relative rounded-xl p-6 sm:p-8 lg:py-[60%] h-full flex flex-col'>
                            <p className='lg:absolute lg:top-8 lg:inset-x-8 mb-4 lg:mb-0'>20 años</p>
                            <p className='mt-auto lg:absolute lg:bottom-8 lg:inset-x-8'>de trayectoria</p>
                        </div>
                    </div>
                    <div className='inline-block w-full mt-5 relative h-52 lg:h-96'>
                        <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} fill style={{objectFit: 'cover'}} className='rounded-xl' />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Empresa;