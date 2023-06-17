import Link from "next/link";

const Footer = () => {
    return (
        <footer className='bg-blue-300 rounded-3xl mx-4 my-4 px-5 md:px-16 lg:px-32 py-10 md:pt-14'>
            <div className='flex flex-col md:flex md:flex-row md:justify-between '>
                <div className='flex flex-col md:block md:flex-1'>
                    <Link href={'/'} className='text-2xl font-semibold'>InterCom.</Link>
                    <p className='mt-2 md:max-w-[386px]'>Instalación y reparación de porteros eléctricos IP y cámaras de seguridad IP enfocados en edificios.</p>
                </div>
                <div className='flex justify-between md:justify-start md:gap-x-24 md:flex-1 md:my-0 mt-8 mb-8'>
                    <div className='flex flex-col space-y-2.5'>
                        <h4 className='font-medium text-lg mb-1.5'>Empresa</h4>
                        <Link href={'/empresa'}>Sobre nosotros</Link>
                        <Link href={'/servicios'}>Servicios</Link>
                        <Link href={'/trabajos'}>Trabajos</Link>
                    </div>
                    <div className='mr-16 flex flex-col space-y-2.5'>
                        <h4 className='font-medium text-lg'>Seguinos</h4>
                        <a href={'https://www.instagram.com/portero.electrico/'} target='_blank'>Instagram</a>
                    </div>
                </div>
                <div className='flex flex-col gap-1.5 mt-5 md:mt-0'>
                    <h4 className='font-medium text-lg'>Contacto</h4>
                    <a href={'mailto:arturogusman@hotmail.com'}>arturogusman@hotmail.com</a>
                    <a href={'https://wa.me/5491155116365'} target='_blank'>+54 9 11 5511 6365</a>
                    <p>Ciudad de Buenos Aires 🇦🇷</p>
                    <p>Barcelona 🇪🇸</p>
                </div>
            </div>
            <div className='border-t border-t-blue-800 mt-8 pt-8 flex flex-col gap-2.5 md:gap-0 md:flex-row md:justify-between md:mt-40'>
                <p className='text-sm font-light'>© 2023 InterCom. Todos los derechos reservados.</p>
                <p className='text-sm font-light'>Made by JoacoGuzman</p>
            </div>
        </footer>
    );
}

export default Footer;