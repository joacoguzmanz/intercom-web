import Link from "next/link";

const MenuMob = ({ menuOpen }) => {
    return (
        <div className={`${menuOpen ? 'absolute' : 'hidden'} md:hidden mt-4 bg-[#304269] w-full py-5 px-2.5 text-white text-center flex flex-col gap-2 rounded-lg`}>
            <Link href={'/empresa'} className='rounded-lg p-2.5'>Empresa</Link>
            <Link href={'/servicios'} className='rounded-lg p-2.5'>Servicios</Link>
            <Link href={'/trabajos'} className='rounded-lg p-2.5'>Trabajos</Link>
        </div>
    )
}

export default MenuMob;