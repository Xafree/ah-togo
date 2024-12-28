import React, {useEffect, useState} from 'react';
import Navbar from "../components/navbar/Navbar";
import {title_page} from "../services/text.services";
import '../styles/aboutus.css';
import axios from "axios";
import {getInfoAboutPage} from "../services/about.service";
import {DonsPagesModel} from "../models/dons-articles-model";
import Footer from "../components/footer/Footer";
import CardAboutPages from "../components/card/about-page/Card-about-pages";

function AboutusPages() {

    const [dataDons, setDataDons] = useState<DonsPagesModel[]>([]);

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
                                <CardAboutPages don={don} key={index}/>
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default AboutusPages;