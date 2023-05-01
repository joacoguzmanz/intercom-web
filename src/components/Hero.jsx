import { motion } from "framer-motion";

const Hero = () => {

    return (
        <div className='flex flex-col justify-center gap-14 h-screen mx-20 pt-10'>
            <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                className='md:text-9xl font-semibold'>Cámaras</motion.h1>
            <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                       className='md:text-9xl font-semibold'>Portería IP</motion.h1>
            <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
                       className='md:text-9xl font-semibold'>Portero Eléctrico</motion.h1>
        </div>
    )
}

export default Hero;