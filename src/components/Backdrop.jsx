const Backdrop = ({ children, onClick }) => {
    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-[#000000aa] z-[60] flex items-center justify-center cursor-default'
             onClick={onClick}>
            { children }
        </div>
    )
}

export default Backdrop;