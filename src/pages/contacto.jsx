import Nav from "../components/navigation/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Image from "next/image";

const Contacto = ({ props }) => {
    console.log(props)

    return (
        <>
            <Nav />

            <header className='h-screen mx-5 gap-2.5 md:gap-5 pt-10'>
                <h1>Dejanos tu contacto</h1>
            </header>


            <section className='flex flex-col gap-5 md:flex-row'>
                <div className='md:w-1/2'>
                    <Image src={'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-58.4455,-34.5824,10.12,0/300x200@2x?access_token=pk.eyJ1Ijoiam9hY29ndXptYW4iLCJhIjoiY2xqMHRja212MDh1NDNwczY1NWZnMnFhaiJ9._bX-BbA30Fwk3zmcz7HzgQ'}
                           alt={'map bsas'} width={300} height={200}
                           className='rounded-3xl md:w-7/12' />
                    <div className=''>
                        <h3 className='text-left'>Ciudad de Buenos Aires</h3>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center'>
                    <Image src={'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.1693,41.397,11.01,0/300x200@2x?access_token=pk.eyJ1Ijoiam9hY29ndXptYW4iLCJhIjoiY2xqMHRja212MDh1NDNwczY1NWZnMnFhaiJ9._bX-BbA30Fwk3zmcz7HzgQ'}
                           alt={'mapa bcn'} width={300} height={200}
                           className='rounded-3xl w-9/12' />
                    <h3>Barcelona</h3>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contacto;