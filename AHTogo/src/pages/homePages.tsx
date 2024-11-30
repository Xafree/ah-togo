import React from 'react';
import '../styles/pages/homepage.css';
import Navbar from "../components/navbar/Navbar";
import imgAcceuil from "../media/imgs/stand-ahtogo.svg";
import {body_text, button_text, title_home_page} from "../services/text.services";
import {useNavigate} from "react-router-dom";

const HomePages=()=> {
    let navigate = useNavigate();
    let link:string = (process.env.REACT_APP_LINK_ARTICLES as string);

    const handlebutton = ()=> {
        navigate(link);
    }

    return (
        <div>
            <div className="global-home-pages">
                <Navbar />
                <div className="home-pages-wrapper">
                    <div className="home-page-container">
                        <span className="back-block-img-top"></span>
                        <span className="back-block-img-bot"></span>
                        <img src={imgAcceuil} alt="acceuil"/>
                    </div>
                    <div className="home-page-container-text">
                        <h2 className="title">{title_home_page}</h2>
                        <p>{body_text}</p>
                        <button className="button" onClick={handlebutton}>{button_text}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePages;