import { motion } from "framer-motion";

const Card = ({title, desc, list, image}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -180 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ ease: 'easeInOut', duration: 1 }}
            className='bg-white min-h-[500px] w-11/12 mx-auto rounded-2xl py-8 px-6 lg:max-w-lg'>
            <div className='w-8/12 mb-5'>
                <img src={`/imgs/${image}`}
                     className='rounded-xl w-full'
                     alt={'Image loading'} />
            </div>
            <h3 className='font-medium text-2xl mb-5'>{ title }</h3>
            <p className='font-medium opacity-50 mb-8'>{ desc }</p>
            <ul className='flex flex-col gap-2.5'>
                {list.map((listItem, i) => {
                    return <li key={i}>{ listItem }</li>
                })}
            </ul>
        </motion.div>
    );
}

export default Card;