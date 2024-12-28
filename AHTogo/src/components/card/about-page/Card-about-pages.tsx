import React, { useState} from 'react';
import ModalCard from "../../modal/modalcard/ModalCard";
import {DonsPagesModel} from "../../../models/dons-articles-model";
import './card-about-pages.css';

interface ICardAboutPages{
    don:DonsPagesModel,
}

function CardAboutPages({don}:ICardAboutPages) {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(!open);
    const handleOpen = () => setOpen(!open);


    return(
        <div className="div-card-about" onClick={handleOpen}>
            <h1>{don.title}</h1>
            <img src={don.image} alt={don.title} className="img-card-abouut"/>
            <ModalCard open={open} title={don.title} images={[don.image]} handleClose={handleClose} pages="about"  text={don.description}/>
        </div>
    );
}

export default CardAboutPages;