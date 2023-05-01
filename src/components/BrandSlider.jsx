import Image from "next/image";

const brands = [
    { alt: 'Akuvox', src: '/imgs/akuvox-logo.png' },
    { alt: 'Fermax', src: '/imgs/fermax-logo.png' },
    { alt: 'Dahua', src: '/imgs/dahua-logo.png' },
    { alt: 'Cygnus', src: '/imgs/cygnus-logo.png' },
    { alt: 'Surix', src: '/imgs/surix-logo.png' },
    { alt: 'Golmar', src: '/imgs/golmar-logo.png' },
    { alt: 'Commax', src: '/imgs/commax-logo.webp' },
    { alt: 'Urmet', src: '/imgs/urmet-logo.png' }
]

const BrandSlider = () => {
    return (
        <div className='h-20 border-t border-b border-gray-600 overflow-hidden relative'>
            <div className='w-[200%] flex items-center h-20 justify-around absolute left-0 animate animate'>
                {brands.map((brand, i) => {
                    return (
                        <div key={i} className='flex justify-center items-center w-24 h-12'>
                            <Image src={brand.src} alt={brand.alt} width={100} height={100} className='w-full' />
                        </div>
                    )
                })}
                {brands.map((brand, i) => {
                    return (
                        <div key={i} className='flex justify-center items-center w-24 h-12'>
                            <Image src={brand.src} alt={brand.alt} width={100} height={100} className='w-full' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BrandSlider;