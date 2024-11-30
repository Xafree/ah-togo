import React from 'react';
import './card.css';

interface ICard {
    title: string;
    srcImage: string;
    content: string;
}

const Card = ({title, content, srcImage}: ICard) => {
    return (
        <div className="div-wrapper">
            <div className="card">
                <img src={srcImage} alt="Un chapeau" className="img-card"/>
                <div className="content">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;