import React from 'react';
import './footer.css';
import appelTelephon from "../../media/icons/appel-telephonique.png";
import whatsapp from "../../media/icons/whatsapp.png";


function Footer() {
    return(
        <footer className="footer">
            <p>Il est impossible de commander sur cette page merci de contacter l’association si vous etes interréser</p>
            <div className="div-footer">
                <div className="div-footer-phone">
                    <img src={appelTelephon} alt="téléphone"  className="footer-img"/>
                    <p>+33XXXXXXXXXX</p>
                </div>
                <div className="div-footer-phone">
                    <img src={whatsapp} alt="whatsapp" className="footer-img"/>
                    <p>+33XXXXXXXXXX</p>
                </div>
            </div>
        </footer>
        );
}

export default Footer;