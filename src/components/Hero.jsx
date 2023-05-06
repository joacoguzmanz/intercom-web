import { motion } from "framer-motion";

const Hero = () => {

    return (
        <div className='relative flex flex-col justify-center gap-7 md:gap-10 h-[85vh] md:h-screen mx-5 md:mx-20 pt-10'>
            <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                       className='text-5xl md:text-8xl font-semibold'>Cámaras</motion.h1>
            <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                       className='text-5xl md:text-8xl font-semibold'>Portería IP</motion.h1>
            <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
                       className='text-5xl md:text-8xl font-semibold'>Portero Eléctrico</motion.h1>

            <p className='absolute right-96 top-56'>Max</p>
        </div>
    )
}

export default Hero;