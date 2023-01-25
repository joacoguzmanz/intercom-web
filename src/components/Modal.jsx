import Backdrop from "./Backdrop.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faXmark} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ handleClose, name, location, text }) => {
    return (
        <Backdrop onClick={handleClose}>
            <div
                onClick={e => e.stopPropagation()}
                className='px-9 py-11 z-[100] bg-white w-11/12 lg:max-w-screen-md mx-auto rounded-md flex flex-col items-center gap-5 md:flex-row md:gap-6 relative'>
                <div className='md:w-6/12'>
                    <img src='/imgs/buenos-aires.jpeg' alt={'Buenos Aires img'} className='rounded-sm' />
                </div>
                <div className='md:w-6/12'>
                    <h4 className='font-medium text-2xl mb-2 md:mb-3.5 lg:text-3xl'>{ name }</h4>
                    <p className='mb-2 font-medium md:mb-3.5'><FontAwesomeIcon icon={faLocationDot} className='mr-1.5' />{ location }</p>
                    <p className='mb-5 md:mb-6'>{ text }</p>
                    <a
                        href={'#contacto'}
                        onClick={handleClose}
                        className='py-2.5 px-5 border border-gray-200 rounded-md font-medium text-sm hover:bg-gray-100 hover:text-blue-700'>Contactanos</a>
                    <button
                        onClick={handleClose}
                        className='bg-gray-100 absolute right-3 top-3 hover:bg-gray-200 font-medium rounded-md px-4 py-2'>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
        </Backdrop>
    )
}

export default Modal;