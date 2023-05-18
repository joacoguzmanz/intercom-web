import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {

    return (
        <div className='relative flex flex-col justify-center gap-7 md:gap-10 h-screen md:h-screen mx-5 md:mx-20 pt-10'>
            <span className='group relative'>
                <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
                           className='text-5xl md:text-center md:text-8xl font-semibold'>Portería IP</motion.h1>
                <Image src={'/imgs/ip_phone.jpeg'} alt={'switch'} width={350} height={350}
                       className='hidden md:group-hover:block md:group-hover:absolute md:group-hover:z-50 md:group-hover:-top-1/2 md:group-hover:left-16 rounded-lg' />
            </span>
            <span className='group/sec relative'>
                <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }} 
                           className='text-5xl md:text-center md:text-8xl font-semibold'>Cámaras de seguridad</motion.h1>
                <Image src={'/imgs/cctv.jpeg'} alt={'cctv'} width={350} height={350}
                       className={'hidden md:group-hover/sec:block md:group-hover/sec:absolute md:group-hover/sec:z-50 md:group-hover/sec:-top-44 md:group-hover/sec:right-16 rounded-lg'} />
            </span>
            <span className={'group/thi relative'}>
                <motion.h1 initial={{ opacity: 0, x: -180 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
                           className='text-5xl md:text-center md:text-8xl font-semibold'>Portero Eléctrico</motion.h1>
                <Image src={'/imgs/portero.jpeg'} alt={'portero'} width={350} height={350}
                       className={'hidden md:group-hover/thi:block md:group-hover/thi:absolute md:group-hover/thi:z-50 md:group-hover/thi:top-0 md:group-hover/thi:-left-6 rounded-lg'} />
            </span>

            <p className='md:text-center text-lg'>Empresa con más de 20 años de experiencia especializada en trabajos para consorcios.</p>
        </div>
    )
}

export default Hero;