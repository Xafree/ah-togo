import React from 'react';
import './card.css';
import ModalCard from "../modal/modalcard/ModalCard";

interface ICard {
    title: string;
    srcImage: string[];
    content: string;
}

const Card = ({title, content, srcImage}: ICard) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);


    console.log(srcImage,title,content);
    return (
        <div className="div-wrapper" onClick={handleOpen}>
            <div className="card">
                <img src={srcImage[0]} alt="Un chapeau" className="img-card"/>
                <div className="content">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
            <ModalCard open={open} handleClose={handleClose} images={srcImage} />
        </div>
    );
}

export default Card;