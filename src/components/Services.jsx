import Card from "./Card.jsx";

const services = [
    { title: 'Porteros eléctricos', desc: 'Nuesta especialidad.', list: ['Reparación de equipos', 'Instalaciones en obras nuevas', 'Surix | Fermax | Kocom | Commax'], image: 'portero.jpeg' },
    { title: 'Cámaras de seguridad', desc: 'Guarda registro de lo que pasa en el consorcio.', list: ['Cámaras Full HD', 'DVR con transmisión WiFi', 'Equipos Dahua última generación'], image: 'cctv.jpeg' },
    { title: 'Telefonía IP', desc: 'Menos cables, mejor conexión.', list: ['Programación de 0', 'Actualizaciones de porteros', 'Reparación de equipos'], image: 'ip_phone.jpeg' }
]

const Services = () => {
    return (
        <div id='servicios' className='py-32 flex flex-col gap-10 lg:flex-row md:mx-6 md:gap-10'>
            { services.map((service, i) => {
                return <Card title={service.title} desc={service.desc} list={service.list} image={service.image} key={i} />
            }) }
        </div>
    )
}

export default Services;