import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal.jsx";

const Building = ({ n, name, location, text }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
          <div className='border-t last:border-b border-black px-3 py-10 flex items-center justify-between cursor-pointer'
               onClick={() => (modalOpen ? close() : open())}>
              <div className='flex items-center gap-2 lg:gap-5'>
                  <p className='hidden font-medium md:block'>{ n }</p>
                  <h3 className='font-medium text-lg md:text-2xl lg:text-4xl'>{ name }</h3>
              </div>
              <div className='flex items-center gap-1 lg:gap-2'>
                  <FontAwesomeIcon icon={ faLocationDot } />
                  <p className='text-sm font-medium'>{ location }</p>
              </div>

              {modalOpen && <Modal handleClose={close} name={ name } location={ location } text={ text } />}
          </div>
    )
}

export default Building;