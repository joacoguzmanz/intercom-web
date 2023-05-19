import HamMenu from "./HamMenu.jsx";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import MenuMob from "./MenuMob.jsx";

const Nav = () => {
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
    }

    return (
        <div className='fixed z-50 w-full'>
            <div className='bg-primary w-full px-5 md:px-16 lg:px-32 py-2.5 text-sm md:text-md flex justify-between md:justify-end md:gap-10'>
                <a href={'mailto:arturogusman@hotmail.com'} className='text-white'>arturogusman@hotmail.com</a>
                <a href={'https://wa.me/5491155116365'} target='_blank' className='text-white'>+54 9 11 6225-6864</a>
            </div>

            <div className='px-5 md:px-16 lg:px-32 py-2.5 md:py-5 flex items-center justify-between gap-1 md:gap-15 bg-white'>
                <Link href={'/'} className='text-2xl font-semibold'>InterCom.</Link>

                <nav className='hidden md:flex md:gap-2.5 lg:gap-14 md:mr-2.5'>
                    <Link href={'/empresa'}>Empresa</Link>
                    <Link href={'/servicios'}>Servicios</Link>
                    <Link href={'/trabajos'}>Trabajos</Link>
                    <Link href={'/contacto'}>Contacto</Link>
                </nav>

                <HamMenu handleMenu={handleMenu} />
            </div>

            <MenuMob menuOpen={menuOpen} />
        </div>
    )
}

export default Nav;