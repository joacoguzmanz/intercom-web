import { motion } from "framer-motion";

const HeroImage = () => {
    return (
        <div className='w-11/12 my-0 mx-auto relative top-[-45px] md:top-[-50px] lg:top-[-90px]'>
            <motion.img
                initial={{ opacity: 0, y: -180 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: 'easeInOut', duration: 1, delay: 0.9 }}
                className='w-full h-full rounded-lg'
                src='/imgs/buenos-aires.jpeg'
                alt={'Buenos Aires City'} />
        </div>
    )
}

export default HeroImage;