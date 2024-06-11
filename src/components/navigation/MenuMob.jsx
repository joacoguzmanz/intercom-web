import Link from "next/link";

const MenuMob = ({ menuOpen }) => {
    return (
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden mt-2 bg-blue-700 w-11/12 mx-auto py-5 px-2.5 text-white text-center flex flex-col gap-2 rounded-lg`}>
            <Link href={'/empresa'} className='rounded-lg p-2.5'>Empresa</Link>
            <Link href={'/servicios'} className='rounded-lg p-2.5'>Servicios</Link>
            <Link href={'/contacto'} className='rounded-lg p-2.5'>Contacto</Link>
        </div>
    )
}

export default MenuMob;
