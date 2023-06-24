import Card from "./Card.jsx";
import Image from "next/image";

const services = [
    { title: 'Porteros eléctricos', desc: 'Nuesta especialidad.', list: ['Reparación de equipos', 'Instalaciones en obras nuevas', 'Surix | Fermax | Kocom | Commax'], image: 'portero.jpeg' },
    { title: 'Cámaras de seguridad', desc: 'Guarda registro de lo que pasa en el consorcio.', list: ['Cámaras Full HD', 'DVR con transmisión WiFi', 'Equipos Dahua última generación'], image: 'cctv.jpeg' },
    { title: 'Telefonía IP', desc: 'Menos cables, mejor conexión.', list: ['Programación de 0', 'Actualizaciones de porteros', 'Reparación de equipos'], image: 'ip_phone.jpeg' }
]

const Services = () => {
    return (
        <div className='py-16 lg:py-36 px-5 md:px-16 lg:px-32 flex flex-col gap-32 md:gap-48'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='relative w-full h-60 md:w-[580px] md:h-[434px]'>
                    <Image src={'/imgs/frente-fermax.jpeg'} alt={'Portero eléctrico Fermax'} fill={true} style={{objectFit:'cover'}} className='rounded-xl' />
                </div>
                <div className='md:w-6/12 md:flex md:flex-col md:justify-between'>
                    <div>
                        <div className='inline-block border border-gray-800 rounded-full font-light px-4 py-0.5 mb-3'>
                            <p className='text-sm'>Portería IP</p>
                        </div>
                        <h3 className='text-2xl md:text-4xl font-semibold mb-5'>Soluciones IP para consorcios</h3>
                        <p className='text-gray-600 mb-5'>Los porteros IP presentan numerosos beneficios para los consorcios.</p>
                    </div>
                    <div className='md:mb-10'>
                        <p className='text-gray-600 mb-5'>¿Por qué elegir porteros IP frente a los tradicionales?</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-2.5'>Ahorro en gastos de mantenimiento</li>
                            <li className='mb-2.5'>Recepción de llamados en celular o tablet</li>
                            <li className='mb-2.5'>Garantía 6 meses</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
                <div className='relative w-full h-60 md:w-[580px] md:h-[434px]'>
                    <Image src={'/imgs/sistema-akuvox.jpeg'} alt={'Sistema de camaras de seguridad'} fill={true} style={{objectFit:'cover'}} className='rounded-xl' />
                </div>
                <div className='md:w-6/12 md:flex md:flex-col md:justify-between'>
                    <div>
                        <div className='inline-block border border-gray-800 rounded-full font-light px-4 py-0.5 mb-3'>
                            <p className='text-sm'>Cámaras de seguridad</p>
                        </div>
                        <h3 className='text-2xl md:text-4xl font-semibold mb-5'>Monitoreo en tiempo real desde cualquier lugar</h3>
                        <p className='text-gray-600 mb-5'>Instalación de sistemas de cámaras IP o convencionales conectados a internet</p>
                    </div>
                    <div className='md:mb-10'>
                        <p className='text-gray-600 mb-5'>Algunos beneficios de nuestros sistemas de videovigilancia</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-2.5'>Cámaras Full HD Dahua primera calidad</li>
                            <li className='mb-2.5'>Conectate a las cámaras por internet desde cualquier lugar</li>
                            <li className='mb-2.5'>Almacenamiento de grabaciones de hasta 30 días</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-10'>
                <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} width={500} height={500} className='rounded-xl md:w-6/12' />
                <div className='md:w-6/12 md:flex md:flex-col md:justify-between'>
                    <div>
                        <div className='inline-block border border-gray-800 rounded-full font-light px-4 py-0.5 mb-3'>
                            <p className='text-sm'>Porteros Eléctricos</p>
                        </div>
                        <h3 className='text-2xl md:text-4xl font-semibold mb-5'>El clásico portero de toda la vida</h3>
                        <p className='text-gray-600 mb-5'>Nuestra especialidad. Tenemos la solución para cualquier problema de su portero.</p>
                    </div>
                    <div className='md:mb-10'>
                        <p className='text-gray-600 mb-5'>Más de 15 años de experiencia nos permiten ofrecerles las siguientes soluciones:</p>
                        <ul className='list-disc list-inside'>
                            <li className='mb-2.5'>Reparación de corto circuitos generales</li>
                            <li className='mb-2.5'>Reposición de frente de calle por vandalismo</li>
                            <li className='mb-2.5'>Renovación o instalación en obra de porteros</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;