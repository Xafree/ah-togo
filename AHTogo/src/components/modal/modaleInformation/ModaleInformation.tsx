import React from 'react';
import './modal.css'
import Modal from '@mui/material/Modal';
import logo from "../../../media/icons/arbre.svg";
import {body_text_modal, modal_button, title_modal} from "../../../services/text.services";

interface IModalInformation{
    handleClose:any;
    open:any;
}

function ModalInformation({handleClose,open}:IModalInformation) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="div-modal">
                <div className="header-of-modale">
                    <img src={logo} alt="logo AHTogo" className="logo-modal"/>
                    <h1>{title_modal}</h1>
                </div>
                <div className="body-of-modale">
                    <p className="">
                        {body_text_modal}
                    </p>
                    <button className="button-of-modale" onClick={handleClose}>{modal_button}</button>
                </div>

            </div>
        </Modal>
    );
}

export default ModalInformation;