import React, {useEffect} from 'react';
import '../styles/pages/homepage.css';
import '../components/card/card.css'
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import {data} from "../services/dataArticles";
import '../styles/pages/articlespage.css';
import ModalInformation from "../components/modaleInformation/ModaleInformation";

function ArticlesPages() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    let articles = data;

    useEffect(() => {
        setTimeout(()=>{
            handleOpen();
        }, 700);
    },[]);

    return (
        <div className="global-article-pages">
            <Navbar />
            <div className="global-article">
                <div className="main-list-of-articles">
                    {
                        articles.map((article, index) => (
                            <Card key={index} title={article.title} content={article.content} srcImage={article.url} />
                        ))
                    }
                </div>
                    <ModalInformation open={open} handleClose={handleClose}/>
            </div>
        </div>
    );
}

export default ArticlesPages;