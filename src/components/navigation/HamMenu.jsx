const HamMenu = ({ handleMenu, isOpen }) => {
    return (
        <div className='inline-block rounded-lg bg-black p-3 space-y-1 cursor-pointer lg:hidden' onClick={handleMenu}>
            {isOpen ? (
                <>
                    <span className='block w-4 h-0.5 bg-white transform -rotate-45 translate-y-1'></span>
                    <span className='block w-4 h-0.5 bg-white transform rotate-45 -translate-y-1'></span>
                </>
            ) : (
                <>
                    <span className='block w-4 h-0.5 bg-white'></span>
                    <span className='block w-4 h-0.5 bg-white'></span>
                    <span className='block w-4 h-0.5 bg-white'></span>
                </>
            )}
        </div>
    )
}

export default HamMenu;
