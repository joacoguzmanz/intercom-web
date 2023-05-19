import Link from "next/link";

const Footer = () => {
    return (
        <div className='px-5 md:px-16 lg:px-32'>
            <div className='min-h-[50vh] rounded-t-2xl bg-blue-800 text-white px-5 py-10 md:flex md:justify-between'>
                <Link href={'/'} className='text-2xl font-semibold'>InterCom.</Link>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 md:mt-0 md:gap-20'>
                    <div>
                        <h4 className='font-medium mb-2.5'>Servicios</h4>
                        <div className='flex flex-col gap-2.5'>
                            <Link href={'/servicios'} className='uppercase'>Portería IP</Link>
                            <Link href={'/servicios'} className='uppercase'>Camaras de seguridad</Link>
                            <Link href={'/servicios'} className='uppercase'>Porteros eléctricos</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-medium mb-2.5'>Links</h4>
                        <div className='flex flex-col gap-2.5'>
                            <Link href={'/'} className='uppercase'>Home</Link>
                            <Link href={'/empresa'} className='uppercase'>empresa</Link>
                            <Link href={'/servicios'} className='uppercase'>Servicios</Link>
                            <Link href={'/trabajos'} className='uppercase'>Trabajos</Link>
                            <Link href={'/contacto'} className='uppercase'>Contacto</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-medium mb-2.5'>Contacto</h4>
                        <div className='flex flex-col gap-2.5'>
                            <a href={'mailto:arturogusman@hotmail.com'}>MAIL</a>
                            <a href={'https://wa.me/5491155116365'} target='_blank'>WHATSAPP</a>
                            <a href={'https://www.instagram.com/portero.electrico/'} target='_blank'>INSTAGRAM</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div id='contacto' className='h-screen mx-5 md:mx-16 flex flex-col justify-center gap-10 lg:gap-14'>
        //     <a href={'mailto:arturogusman@hotmail.com'} className='text-2xl md:text-4xl lg:text-5xl font-medium mt-auto lg:inline-block lg:relative'>arturogusman@hotmail.com</a>
        //     <motion.a href={'https://wa.me/5491155116365'} target='_blank' className='group text-2xl md:text-4xl lg:text-5xl font-medium'>+54 9 11 55116365</motion.a>
        //     <div className='hidden'>
        //         <p>Ciudad de Buenos Aires, Argentina</p>
        //         <p>Barcelona, España</p>
        //     </div>
        //     <span className='text-xs md:text-sm self-end mt-auto mb-6'>Diseño y desarrollo <a href={'https://www.linkedin.com/in/guzman-joaquin/'} target='_blank'>Joaquin Guzmán</a></span>
        // </div>
    );
}

export default Footer;