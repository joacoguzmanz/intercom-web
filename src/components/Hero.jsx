const Hero = () => {

    return (
        <div className='relative flex flex-col justify-center gap-7 md:gap-10 h-screen md:h-screen mx-5 md:mx-20 pt-10'>
            <span className='group relative'>
                <h1 className='text-5xl md:text-center md:text-8xl font-semibold'>Portería IP</h1>
            </span>
            <span className='group/sec relative'>
                <h1 className='text-5xl md:text-center md:text-8xl font-semibold'>Cámaras de seguridad</h1>
            </span>
            <span className={'group/thi relative'}>
                <h1 className='text-5xl md:text-center md:text-8xl font-semibold'>Portero Eléctrico</h1>
            </span>

            <p className='md:text-center text-lg'>Empresa con más de 20 años de experiencia especializada en trabajos para consorcios.</p>
        </div>
    )
}

export default Hero;