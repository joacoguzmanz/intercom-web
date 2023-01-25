import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div id='contacto' className='h-screen mx-5 md:mx-16 flex flex-col justify-center gap-10 lg:gap-14'>
            <a href={'mailto:arturogusman@hotmail.com'} className='text-2xl md:text-4xl lg:text-5xl font-medium mt-auto lg:inline-block lg:relative'>arturogusman@hotmail.com</a>
            <motion.a href={'https://wa.me/5491155116365'} target='_blank' className='group text-2xl md:text-4xl lg:text-5xl font-medium'>+54 9 11 55116365</motion.a>
            <div className='hidden'>
                <p>Ciudad de Buenos Aires, Argentina</p>
                <p>Barcelona, España</p>
            </div>
            <span className='text-xs md:text-sm self-end mt-auto mb-6'>Diseño y desarrollo <a href={'https://www.linkedin.com/in/guzman-joaquin/'} target='_blank'>Joaquin Guzmán</a></span>
        </div>
    );
}

export default Contact;