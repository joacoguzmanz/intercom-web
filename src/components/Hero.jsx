import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1
        }
    }
}

const letterAnim = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        }
    }
}

const Hero = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, [])

    return (
        <>
            <motion.div className='relative z-50 mb-32' variants={banner} >
                <HeroRowTop title={'Cámaras'} />
                <HeroRowCenter title={'Porteros'} playMarquee={playMarquee} />
                <HeroRowBottom title={'Telefonía'} />
            </motion.div>
        </>
    )
}

const AnimatedLetters = ({ title, disabled }) => {
    return (
        <motion.span variants={ disabled ? null : banner } initial='initial' animate='animate'
            className='text-8xl md:text-9xl lg:text-heroxl 2xl:text-hero2xl font-medium relative tracking-tight leading-tight inline-block whitespace-nowrap'>
            {[...title].map((letter, index) => {
                 return (<motion.span variants={ disabled ? null : letterAnim }
                     key={index} className='text-8xl md:text-9xl lg:text-heroxl 2xl:text-hero2xl font-medium relative tracking-normal leading-tight inline-block whitespace-nowrap'>
                    {letter}
                </motion.span>)
            })}
        </motion.span>
    )
}

const HeroRowTop = ({ title }) => {
    return (
        <div className='overflow-hidden flex items-center'>
            <div className='md:w-7/12 flex items-center justify-center'>
                <AnimatedLetters title={title} />
            </div>
            <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity:1, y: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
                className='hidden md:block md:w-5/12 flex items-center justify-center'>
                <span className='hidden md:block md:m-auto md:w-60 lg:w-80 font-medium text-md lg:text-xl'>
                    20 años de experiencia trabajando con consorcios
                </span>
            </motion.div>
        </div>
    )
}

const HeroRowBottom = ({ title }) => {
    return (
        <div className='overflow-hidden flex items-center justify-center text-center'>
            <a href='#contacto'>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease:[0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
                className='hidden md:block md:bg-white md:h-28 md:w-28 lg:h-40 lg:w-40 md:rounded-full md:flex md:justify-center md:items-center md:flex-col'>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}
                    className='md:font-medium md:text-sm lg:text-lg'>Contactanos</motion.span>
            </motion.div></a>
            <AnimatedLetters title={title} />
        </div>
    )
}

const HeroRowCenter = ({ title, playMarquee }) => {
    return (
        <div className={`overflow-hidden flex items-center relative animate-marquee ${playMarquee && 'running'}`}>
            <motion.div initial={{ y: 130 }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
                className={`w-fit flex relative threeD gap-x-28 ${!playMarquee ? 'pause' : 'running'}`}>
                <AnimatedLetters title={title} disabled />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} disabled />
            </motion.div>
        </div>
    )
}

export default Hero;