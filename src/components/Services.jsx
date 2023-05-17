import Card from "./Card.jsx";
import Image from "next/image";

const services = [
    { title: 'Porteros eléctricos', desc: 'Nuesta especialidad.', list: ['Reparación de equipos', 'Instalaciones en obras nuevas', 'Surix | Fermax | Kocom | Commax'], image: 'portero.jpeg' },
    { title: 'Cámaras de seguridad', desc: 'Guarda registro de lo que pasa en el consorcio.', list: ['Cámaras Full HD', 'DVR con transmisión WiFi', 'Equipos Dahua última generación'], image: 'cctv.jpeg' },
    { title: 'Telefonía IP', desc: 'Menos cables, mejor conexión.', list: ['Programación de 0', 'Actualizaciones de porteros', 'Reparación de equipos'], image: 'ip_phone.jpeg' }
]

const Services = () => {
    return (
        <div className='py-16 lg:py-36 px-5 md:px-16 lg:px-32 flex flex-col gap-10'>
            <Image src={'/imgs/portero.jpeg'} alt={'Portero eléctrico'} width={500} height={500} className='rounded-xl' />
            <div>
                <div className='inline-block border border-gray-800 rounded-full text-sm font-light px-4 py-0.5 mb-3'>
                    <p>Portería IP</p>
                </div>
                <h3 className='text-2xl font-semibold mb-5'>Soluciones IP para consorcios</h3>
                <p className='text-gray-600 mb-5'>Los porteros IP presentan numerosos beneficios para los consorcios.</p>
                <ul className='list-disc list-inside'>
                    <li className='mb-2.5'>Ahorro en gastos de mantenimiento</li>
                    <li className='mb-2.5'>Recepción de llamados en celular o tablet</li>
                    <li className='mb-2.5'>Garantía 6 meses</li>
                </ul>
            </div>
        </div>
        // <div id='servicios' className='py-32 flex flex-col gap-10 lg:flex-row md:mx-6 md:gap-10'>
        //     { services.map((service, i) => {
        //         return <Card title={service.title} desc={service.desc} list={service.list} image={service.image} key={i} />
        //     }) }
        // </div>
    )
}

export default Services;