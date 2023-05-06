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
        <div className='fixed z-50 w-full flex justify-center items-center'>
            <div className='w-11/12 md:w-fit rounded-lg py-2.5 md:px-5 mt-5 md:mt-10 flex justify-between md:gap-20 md:shadow-nav bg-white relative'>

                <p className='text-2xl font-bold'>InterCom.</p>

                <div className='flex items-center gap-1 md:gap-15'>
                    <nav className='hidden md:flex md:gap-2.5 md:mr-2.5'>
                        <Link href={'/empresa'}>Empresa</Link>
                        <Link href={'/servicios'}>Servicios</Link>
                        <Link href={'/trabajos'}>Trabajos</Link>
                    </nav>

                    <button className='bg-primary text-white px-3 py-1.5 rounded-lg'>
                        <Link href={'/contacto'}>Contacto</Link>
                    </button>

                    <HamMenu handleMenu={handleMenu} />

                    <div className='hidden md:flex md:gap-1'>
                        <a className='rounded-lg py-1.5 px-3 border hover:border-white hover:bg-gray-800 hover:text-white' href={'https://wa.me/5491155116365'} target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a className='rounded-lg py-1.5 px-3 border hover:border-white hover:bg-gray-800 hover:text-white' href={'https://www.instagram.com/portero.electrico/'} target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>

                <MenuMob menuOpen={menuOpen} />
            </div>
        </div>
    )
}

export default Nav;