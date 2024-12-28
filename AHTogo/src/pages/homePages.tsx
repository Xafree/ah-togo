import React, {useEffect, useState} from 'react';
import '../styles/homepage.css';
import Navbar from "../components/navbar/Navbar";
import {button_text} from "../services/text.services";
import {useNavigate} from "react-router-dom";
import {getDataHomePage} from "../services/home.service";
import {HomesPagesData} from "../models/home.page.model";
import axios from "axios";

const HomePages=()=> {
    let navigate = useNavigate();
    let link:string = "/articles";
    const [dateHomePage, setDataHomePage] = useState<HomesPagesData | null>(null);

    /**
     * Permet de récupérer les données de la page d'accueil
     * Nous controllons les requetes  a l'aide de AbordController, nous souhaitons les annulés avant le composant ce démonte.
     */
    useEffect(() => {
        //Permet d'annuler la requete en cas de démontage du composant.
        const controller = new AbortController();
        const getData = async (controller : AbortController) => {
            try {
                //On récupère les données du pour afficher les éléments du front
                const response = await getDataHomePage(controller);
                if(response.status === 200){
                    setDataHomePage(response.data[0]);
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

    const handlebutton = ()=> {
        navigate(link);
    }

    return (
        <div>
            <div className="global-home-pages">
                <Navbar />
                {dateHomePage && (
                    <div className="home-pages-wrapper">
                        <div className="home-page-container">
                            <img src={dateHomePage.image} alt="acceuil"/>
                        </div>
                        <div className="home-page-container-text">
                            <h2 className="title-home-page">{dateHomePage.title}</h2>
                            {/* On parcours la phrase pour remplacer les \r\n en balise <br /> */}
                            {dateHomePage.description.split(/\r?\n/).map((line, index) => (
                                <p key={index}>
                                    {line}
                                    <br />
                                </p>
                            ))}
                        </div>
                    </div>
                )}
                <button className="button" onClick={handlebutton}>{button_text}</button>
            </div>
        </div>
    );
}
export default HomePages;