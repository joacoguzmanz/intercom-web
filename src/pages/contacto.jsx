import Nav from "../components/navigation/Nav.jsx";
import Footer from "../components/Footer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import HeadSeo from "../components/HeadSeo.jsx";

const Contacto = ({ props }) => {
    console.log(props)

    return (
        <>
            <HeadSeo
                title={'InterCom - Contactanos'}
                description={'Dejanos tu consulta, responderemos a la brevedad'} />

            <Nav />

            <header className='h-[40vh] flex flex-col justify-center items-center mx-5 gap-2.5 md:gap-5 pt-24'>
                <h1 className='text-center font-semibold text-3xl md:text-6xl'>Contactanos</h1>
            </header>

            <section className='mb-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4 lg:grid-rows-3 lg:gap-5 lg:py-8 lg:px-20'>
                <div className='border border-primary rounded-2xl p-5 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4'>
                    <h2 className='text-lg font-medium mb-3'>Estamos para lo que necesites</h2>
                    <div className='flex flex-col gap-2.5'>
                        <p className='w-11/12'>Podés escribinor tanto por mail o WhatsApp para realizar una consulta o pedir un presupuesto.</p>
                        <p className='w-11/12'>También podés contactarnos por nuestras redes sociales.</p>
                        <p className='w-11/12'>Para poder asesorarte más rápido y personalizado, no olivdes los siguientes datos en tu mensaje:</p>
                        <ul className='list-disc list-inside'>
                            <li>Dirección del consorcio</li>
                            <li>Nombre del administrador</li>
                            <li>Falla del equipo</li>
                            <li>Foto del portero eléctrico</li>
                        </ul>
                    </div>
                </div>
                <div className='border border-primary rounded-2xl p-5'>
                    <h2 className='text-lg font-medium mb-3'>Teléfono</h2>
                    <a href={'#'} target='_blank'><FontAwesomeIcon icon={faWhatsapp} /> +54 9 11 5511-6365</a>
                </div>
                <div className='border border-primary rounded-2xl p-5'>
                    <h2 className='text-lg font-medium mb-3'>Mail</h2>
                    <a href={'mailto:arturogusman@hotmail.com'}><FontAwesomeIcon icon={faEnvelopeOpenText} /> arturogusman@hotmail.com</a>
                </div>
                <div className='border border-primary rounded-2xl p-5 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4'>
                    <h2 className='text-lg font-medium mb-3'>Redes sociales</h2>
                    <a href={'#'} target='_blank'><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                </div>
                <div className='border border-primary rounded-2xl p-5 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-4'>
                    <h2 className='text-lg font-medium mb-3'>¿Dónde estamos?</h2>
                    <ul>
                        <li>🇦🇷 Ciudad de Buenos Aires</li>
                        <li>🇪🇸 Barcelona</li>
                    </ul>
                </div>
            </section>

            {/*<section className='flex flex-col gap-5 md:flex-row'>*/}
            {/*    <div className='md:w-1/2'>*/}
            {/*        <Image src={'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-58.4455,-34.5824,10.12,0/300x200@2x?access_token=pk.eyJ1Ijoiam9hY29ndXptYW4iLCJhIjoiY2xqMHRja212MDh1NDNwczY1NWZnMnFhaiJ9._bX-BbA30Fwk3zmcz7HzgQ'}*/}
            {/*               alt={'map bsas'} width={300} height={200}*/}
            {/*               className='rounded-3xl md:w-7/12' />*/}
            {/*        <div className=''>*/}
            {/*            <h3 className='text-left'>Ciudad de Buenos Aires</h3>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className='w-1/2 flex justify-center'>*/}
            {/*        <Image src={'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.1693,41.397,11.01,0/300x200@2x?access_token=pk.eyJ1Ijoiam9hY29ndXptYW4iLCJhIjoiY2xqMHRja212MDh1NDNwczY1NWZnMnFhaiJ9._bX-BbA30Fwk3zmcz7HzgQ'}*/}
            {/*               alt={'mapa bcn'} width={300} height={200}*/}
            {/*               className='rounded-3xl w-9/12' />*/}
            {/*        <h3>Barcelona</h3>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <Footer />
        </>
    )
}

export default Contacto;