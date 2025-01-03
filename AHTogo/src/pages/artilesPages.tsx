import React, {useEffect, useState} from 'react';
import '../styles/homepage.css';
import '../components/card/articles/card.css'
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/articles/Card";
import '../styles/articlespage.css';
import ModalInformation from "../components/modal/modaleInformation/ModaleInformation"
import axios from "axios";
import {Articles} from "../models/articles-model";
import {getArticles} from "../services/articles.service";
import Footer from "../components/footer/Footer";

function ArticlesPages() {

    const [open, setOpen] = React.useState(false);
    const [dataArticle, setDataArticle] = useState<Articles[]>([]);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    useEffect(() => {
        //Permet d'annuler la requete en cas de démontage du composant.
        const controller = new AbortController();
        const getData = async (controller : AbortController) => {
            try {
                //On récupère les données du pour afficher les éléments du front
                const response = await getArticles(controller);
                if(response.status === 200){
                    setDataArticle(response.data);
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

        setTimeout(()=>{
            handleOpen();
        }, 700);

        return () => {
            // Annuler la requête si le composant est démonté
            controller.abort();
        };
    },[]);

    return (
        <div className="global-article-pages">
            <Navbar />
            <div className="global-article">
                <h1 className="h1-articles">Articles</h1>
                <div className="main-list-of-articles">
                    {
                        dataArticle.map((article, index) => (
                            <Card key={index} title={article.title} content={article.description} srcImage={article.image} />
                        ))
                    }
                </div>
                <ModalInformation open={open} handleClose={handleClose}/>
                <Footer />
            </div>
        </div>
    );
}

export default ArticlesPages;