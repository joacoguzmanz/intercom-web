import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className='relative bg-gray-200 px-5 md:px-16 lg:px-32 py-10'>
            <div className='border border-black w-11/12 mx-auto -mt-16 mb-8 p-2.5 rounded-md'>
                <p>Contactanos, estamos para lo que necesites</p>
                <h4 className='font-medium text-lg text-center'>Contactanos</h4>
            </div>
            <Link href={'/'} className='text-2xl font-semibold'>InterCom.</Link>
            <div className='md:flex md:gap-16'>
                <div className='flex flex-col gap-1.5 mt-5'>
                    <h4 className='font-medium text-lg'>Info</h4>
                    <p>🇦🇷 Ciudad de Buenos Aires | 🇪🇸 Barcelona</p>
                    <a href={'mailto:arturogusman@hotmail.com'}><FontAwesomeIcon className={'mr-2'} icon={faAt} />arturogusman@hotmail.com</a>
                    <a href={'https://wa.me/5491155116365'} target='_blank'><FontAwesomeIcon className={'mr-2'} icon={faWhatsapp} />+54 9 11 5511 6365</a>
                    <a href={'https://www.instagram.com/portero.electrico/'} target='_blank'><FontAwesomeIcon className={'mr-2'} icon={faInstagram} />@portero.electrico</a>
                </div>
                <div className='flex flex-col gap-1.5 mt-5'>
                    <h4 className='font-medium text-lg'>Links</h4>
                    <Link href={'/empresa'}>Empresa</Link>
                    <Link href={'/servicios'}>Servicios</Link>
                    <Link href={'/trabajos'}>Trabajos</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;