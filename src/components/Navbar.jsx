import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import HamMenu from "./navigation/HamMenu.jsx";
import Menu from "./navigation/Menu.jsx";
import MenuItem from "./navigation/MenuItem.jsx";

// const links = ['Empresa', 'Servicios', 'Trabajos', 'Contacto'];

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const update = () => {
        if (scrollY.current < scrollY.prev) {
            setHidden(false)
        } else if (scrollY.current > 50 && scrollY.current > scrollY.prev) {
            setHidden(true)
        }
    }

    useMotionValueEvent(scrollY, 'change', (latest) => {
        update()
    })

    let variants = {}

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (!isMobile) {
            variants = {
                visible: { opacity: 1, y: 10 },
                hidden: { opacity: 0, y: -180 }
            }
        }
    }, [])

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    return (
        <motion.div variants={variants} animate={hidden ? 'hidden' : 'visible'} transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
                    className='fixed z-50 top-10 px-5 md:px-20 w-full flex items-center justify-between'>

            <Link href={'/'} className='text-xl md:text-3xl font-medium'>InterCom.</Link>

            <Menu isOpen={menuOpen}>
                <HamMenu handleMenu={handleMenu} isOpen={menuOpen} />
                <MenuItem title={'Empresa'} href={'/empresa'} />
                <MenuItem title={'Servicios'} href={'/servicios'} />
                <MenuItem title={'Trabajos'} href={'/trabajos'} />
                <MenuItem title={'Contacto'} href={'/contacto'} />
            </Menu>

            <div className='text-3xl font-medium flex gap-5'>
                <HamMenu handleMenu={handleMenu} isOpen={menuOpen} />
                <a className='hidden md:block' href={'https://wa.me/5491155116365'} target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a className='hidden md:block' href={'https://www.instagram.com/portero.electrico/'} target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </motion.div>
    );
}

export default Navbar;