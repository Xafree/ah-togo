import React, {useEffect, useState} from 'react';
import Navbar from "../components/navbar/Navbar";
import {title_page} from "../services/text.services";
import '../styles/pages/aboutus.css';
import axios from "axios";
import {getInfoAboutPage} from "../services/about.service";
import {DonsPagesModel} from "../models/dons-articles-model";
import ModalCard from "../components/modal/modalcard/ModalCard";

function AboutusPages() {

    const [dataDons, setDataDons] = useState<DonsPagesModel[]>([]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(!open);
    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        //Permet d'annuler la requete en cas de démontage du composant.
        const controller = new AbortController();
        const getData = async (controller : AbortController) => {
            try {
                //On récupère les données du pour afficher les éléments du front
                const response = await getInfoAboutPage(controller);
                if(response.status === 200){
                    setDataDons(response.data);
                }
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Requête annulée', e.message);
                } else {
                    console.error('Erreur lors de la récupération des données', e);
                }
            }
        }
        getData(controller);
        return () => {
            // Annuler la requête si le composant est démonté
            controller.abort();
        };
    },[]);

    return (
        <div>
            <Navbar />
            <div className="global-page-about">
                <h1 className="title-about-page">{title_page}</h1>
                <div className="global-card-about-page">
                    {
                        dataDons.map((don: DonsPagesModel, index) => {
                            return (
                                <div className="div-card-about" key={index}  onClick={handleOpen}>
                                    <h1>{don.title}</h1>
                                    <img src={don.image} alt={don.title} className="img-card-abouut"/>
                                    <ModalCard open={open} title={don.title} images={[don.image]} handleClose={handleClose} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutusPages;


/**

 <h1>{title_page}</h1>
 <div className="main-about-us">
 <div className="div-bloc-vente">
 <h1 className="div-bloc-vente-h1">{bloc_sell_title}</h1>
 <img src={standAhtogo} alt="stand ahtogo" className="div-bloc-vente-img"/>
 <p className="div-bloc-vente-p">{bloc_sell_text}</p>
 </div>
 <div className="div-bloc-vente">
 <h1 className="div-bloc-vente-h1">{bloc_exportation_title}</h1>
 <img src={artisan} alt="stand ahtogo" className="div-bloc-vente-img"/>
 <p className="div-bloc-vente-p">{bloc_exportation_text}</p>
 </div>
 <div className="div-bloc-vente">
 <h1 className="div-bloc-vente-h1">{bloc_help_title}</h1>
 <img src={don} alt="stand ahtogo" className="div-bloc-vente-img"/>
 <p className="div-bloc-vente-p">{bloc_help_text}</p>
 </div>
 </div>


 */