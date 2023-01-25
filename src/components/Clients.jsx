import Building from "./Building.jsx";

const clients = [
    { n: '01', name: 'Torres Mulieris', location: 'Puerto Madero, CABA', text: 'Instalación puerto de porteros eléctricos y centrales telefónicas. Instalación de cámaras de seguridad.' },
    { n: '02', name: 'Torres Caballito Nuevo', location: 'Caballito, CABA', text: 'Instalación caballito de porteros eléctricos y centrales telefónicas. Instalación de cámaras de seguridad.' },
    { n: '03', name: 'Arenales 1805', location: 'Recoleta, CABA', text: 'Instalación recoleta de porteros eléctricos y centrales telefónicas. Instalación de cámaras de seguridad.' }
]

const Clients = () => {
    return (
        <div id='trabajos' className='py-32 mx-5 md:mx-16 lg:mx-32'>
            <div className='flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between mb-10 lg:mb-16'>
                <h2 className='text-7xl lg:text-8xl font-medium'>Trabajos</h2>
                <p className='font-medium hidden md:block'>Clientes que nos vuelven a elegir</p>
            </div>
            { clients.map((client, i) => {
                return <Building n={client.n} name={client.name} location={client.location} text={client.text} key={i} />
            }) }
        </div>
    )
}

export default Clients;