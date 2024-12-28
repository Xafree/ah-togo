import React, {useState} from 'react';
import './card.css';
import ModalCard from "../../modal/modalcard/ModalCard";

interface ICard {
    title: string;
    srcImage: string[];
    content: string;
}

const Card = ({title, content, srcImage}: ICard) => {

    const [openCard, setOpenCard] = useState<boolean>(false);
    const handleCloseCard = () => setOpenCard(!openCard);
    const handleOpenCard = () => setOpenCard(!openCard);

    return (
        <div className="div-wrapper" onClick={handleOpenCard}>
            <div className="card">
                <img src={srcImage[0]} alt="Un chapeau" className="img-card"/>
                <div className="content">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
            <ModalCard open={openCard} handleClose={handleCloseCard} images={srcImage} title={title} pages="articles" />
        </div>
    );
}

export default Card;