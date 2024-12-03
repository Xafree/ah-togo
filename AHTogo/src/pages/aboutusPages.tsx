import React from 'react';
import '../styles/pages/homepage.css';
import NavbarPhone from "../components/navbar/Navbar-phone";
import {
    bloc_exportation_text,
    bloc_exportation_title, bloc_help_text,
    bloc_help_title,
    bloc_sell_text,
    bloc_sell_title, title_page
} from "../services/text.services";
import standAhtogo from '../media/imgs/stand-ahtogo.svg';
import don from '../media/imgs/don.jpg';
import artisan from '../media/imgs/artisant_local.jpg';
import '../styles/pages/aboutus.css';
import {useDeviceType} from "../hooks/useDeviceType";
import Navbar from "../components/navbar/Navbar";

function AboutusPages() {
    const deviceType = useDeviceType();
    return (
        <div>
            {deviceType=== 'mobile'?  <NavbarPhone /> : <Navbar/>}
            <div className="global-page">
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
            </div>
        </div>
    );
}

export default AboutusPages;