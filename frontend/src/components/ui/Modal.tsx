"use client"

import Modal from "react-modal"
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0', // Remove default padding
      border: 'none', // Remove default border if needed
      borderRadius: '16px', // Adjust border radius
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999, // Set the z-index to a high value
    },
  };

  Modal.setAppElement('body');

interface modalProps {
    children: React.ReactNode;
    open:boolean
    closeModal:()=>void
}

function CustomModal({children,open,closeModal}:modalProps) {
  return (
        <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        {children}
      </Modal>
    
  )
}

export default CustomModal