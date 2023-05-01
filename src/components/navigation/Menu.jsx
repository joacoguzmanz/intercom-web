const Menu = ({ children, isOpen }) => {
    return (
        <nav className={`${isOpen ? 'fixed top-0 left-0 w-full z-50 h-screen bg-blue-400' : 'hidden' } md:p-2.5 md:rounded-lg md:flex md:items-center md:gap-2.5 bg-gray-800`}>
            {children}
        </nav>
    )
}

export default Menu;
