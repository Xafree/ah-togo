import React from 'react';
import './modalcard.css'
import Modal from '@mui/material/Modal';

interface ModalCard{
    handleClose:any;
    open:any;
    images:string[];
}

function ModalCard({handleClose,open,images}:ModalCard) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="div-card-modal">
                {images.map((image:string) => (
                    <img src={image} alt="Un chapeau" className="image-card-modal"/>
                ))}
            </div>
        </Modal>
    );
}

export default ModalCard;