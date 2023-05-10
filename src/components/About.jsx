import AboutCard from "./AboutCard.jsx";

const cardsInfo = [
    { preTitle: 'Estás en buenas manos', title: '20 años', desc: 'de experiencia en el rubro trabajando con consorcios y contando.' },
    { preTitle: 'Ya lo hemos hecho', title: '+2000', desc: 'trabajos realizados en los últimos 3 años entre reparaciones, instalaciones y obras.' },
    { preTitle: 'Siempre mejorando', title: '3', desc: 'marcas nuevas reciente agragadas para instalación y reparación.' },
]

const About = () => {
    return (
        <div className='py-8 lg:py-36 px-5 md:px-16 lg:px-32 bg-primary text-white'>

            <p className='uppercase text-sm'>Como lo hacemos</p>
            <h2 className='text-4xl lg:text-5xl font-medium leading-none my-2.5'>Soluciones modernas para consorcios</h2>

            <div className='py-8 md:py-10 flex flex-col md:flex-row gap-4'>
                { cardsInfo.map((card, index) => <AboutCard key={ index } { ...card } />) }
            </div>
        </div>
    )
}

export default About;
