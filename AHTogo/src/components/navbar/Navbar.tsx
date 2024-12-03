import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";
import logo from '../../media/icons/arbre.svg';
import shop from '../../media/icons/bag.png';
import home from '../../media/icons/home.png';
import aboutUs from '../../media/icons/about-us.png';

const Navbar = () => {
    return (
        <div className="global-nav-desktop">
                <div className="logo-title-desktop">
                    <img src={logo} alt="logo AHTogo" className="logo-desktop"/>
                    <h1 className="title">AH Togo</h1>
                </div>
                <div className="navbar-desktop">
                    <div className="home-icon-desktop">
                        <NavLink to="/" className="link">
                            <img src={home} alt="Acceuil" className="icon-desktop"/>
                            <p className="label-link">Accueil</p>
                        </NavLink>
                    </div>
                    <div className="article-icon-desktop">
                        <NavLink to="/articles" className="link">
                            <img src={shop} alt="Articles" className="icon-desktop"/>
                            <p className="label-link">Articles</p>
                        </NavLink>
                    </div>
                    <div className="about-us-icon-desktop">
                        <NavLink to="/reseaux" className="link">
                            <img src={aboutUs} alt="contact" className="icon-desktop"/>
                            <p className="label-link">Association</p>
                        </NavLink>
                    </div>
                </div>
        </div>
    );
}
export default Navbar;