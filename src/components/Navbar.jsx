import { motion } from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const links = ['Empresa', 'Servicios', 'Trabajos', 'Contacto'];

const Navbar = () => {
    return (
        <motion.div initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
            className='flex justify-between items-center mx-5 py-4 md:py-14 md:mx-16 lg:mx-32'>
            <p className='flex-[4_1_0%] text-lg font-medium md:text-3xl md:flex-[4_1_auto] lg:flex-initial'>InterCom.</p>
            <nav className='hidden lg:block lg:w-full lg:flex lg:justify-center'>
                {links.map((link, i) =>
                    <li key={link[i]} className='list-none lg:mx-10 lg:font-medium'>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                )}
            </nav>
            <div className='flex-1 mr-2 text-xs md:text-3xl md:mr-0 md:font-medium md:text-center'>
                <a href={'https://wa.me/5491155116365'} target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
            <div className='h-12 w-12 rounded-full flex flex-col justify-center items-center duration-300 ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] hover:bg-gray-400 lg:hidden'>
                <span className='w-5 h-1 my-0.5 bg-black block md:w-6'></span>
                <span className='w-5 h-1 my-0.5 bg-black block md:w-6'></span>
            </div>
        </motion.div>
    );
}

export default Navbar;