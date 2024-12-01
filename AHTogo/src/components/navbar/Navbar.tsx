import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";
import logo from '../../media/icons/arbre.svg';
import shop from '../../media/icons/bag.png';
import home from '../../media/icons/home.png';
import aboutUs from '../../media/icons/about-us.png';


const Navbar = () => {
    return (
        <div className="global-nav">
                <div className="logo-title">
                    <img src={logo} alt="logo AHTogo" className="logo"/>
                    <h1 className="title">AH Togo</h1>
                </div>

                <div className="position">
                    <div className="navbar">
                        <div className="article-icon">
                            <NavLink to="/articles">
                                <img src={shop} alt="Articles" className="icon"/>
                            </NavLink>
                        </div>
                        <div className="home-icon">
                            <NavLink to="/">
                                <img src={home} alt="Acceuil" className="icon"/>
                            </NavLink>
                        </div>
                        <div className="about-us-icon">
                            <NavLink to="/reseaux">
                                <img src={aboutUs} alt="contact" className="icon"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Navbar;