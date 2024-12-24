import React from 'react';
import './modalcard.css'
import Modal from '@mui/material/Modal';

interface IModalCard{
    handleClose:() => void,
    open:boolean;
    images:string[];
    title:string;
}

function ModalCard({handleClose,open,images,title}:IModalCard) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="div-card-modal">
                <section className="x mandatory-scroll-snapping" dir="ltr">
                    {images.map((image: string) => (
                        <div className="scroll-card">
                            <img src={image} alt="Un chapeau" className="image-card-modal"/>
                        </div>
                    ))}
                </section>
                <div className="div-panel-right">
                    <h1 className="h1-title-modal">{title}</h1>
                    <div className="text-modal-card">
                        <i className="i-text">Chaque élément sont des modèles unique.</i>
                        <i className="i-text">Pour plus de précision merci de contacter l'association</i>
                    </div>
                    <button className="button-modal" onClick={handleClose}>Fermer</button>
                </div>

            </div>
        </Modal>
    );
}

export default ModalCard;