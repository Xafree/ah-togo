import React from 'react';
import './modalcard.css'
import Modal from '@mui/material/Modal';

interface IModalCard{
    handleClose:() => void,
    open:boolean;
    images:string[];
    title:string;
    pages: string;
    text?:string;
}

function ModalCard({handleClose,open,images,title, pages,text}:IModalCard) {

    const articlePage =()=>{
        return (
            <div className="div-card-modal">
                <section className="x mandatory-scroll-snapping" dir="ltr">
                    {images.map((image: string,index) => (
                        <div className="scroll-card" key={index}>
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
        );
    }

    const aboutPage =() =>{
        return(
            <div className="div-card-modal-about">
                <section className="x mandatory-scroll-snapping" dir="ltr">
                    {images.map((image: string,index) => (
                        <div className="scroll-card-about" key={index}>
                            <img src={image} alt="" className="image-card-modal-about"/>
                        </div>
                    ))}
                </section>
                <div className="div-panel-right">
                    <h1 className="h1-title-modal">{title}</h1>
                    <div className="text-modal-card-about">
                        <p>{text}</p>
                    </div>
                    <button className="button-modal" onClick={handleClose}>Fermer</button>
                </div>
            </div>
        )
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div>
                {
                    pages === "articles" ? articlePage() : aboutPage()
                }
            </div>
        </Modal>
    );
}

export default ModalCard;