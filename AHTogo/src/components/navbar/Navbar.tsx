import React from 'react';
import './navbar.css';
import {NavLink} from "react-router-dom";
import logo from '../../media/icons/arbre.svg';
import shop from '../../media/icons/shopping-cart_icon-icons.com_72552.svg';
import home from '../../media/icons/home_icon-icons.com_73532.svg';
import us from '../../media/icons/open-book.svg';
import menuIcons from '../../media/icons/icons-menu.svg';


const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    //handle the buton menu on smartphone divce, open and close the menu
    const handleMenu = ():void=> {setOpenMenu(!openMenu)};

    return (
        <div className="position">
            <div className="menu">
                <img src={logo} alt="logo AHTogo" className="logo"/>
                <h1 className="title">AH Togo</h1>
                <div className={!openMenu ? "navbar" : "drop-down-menu"}>
                    <div className="div-link-icon" onClick={handleMenu}>
                        <img src={menuIcons} alt="contact" className="burger-icon"/>
                    </div>
                    <div className={!openMenu ? "div-link" : "div-link-open"}>
                        <NavLink to="/" className="navlink">
                            <img src={home} alt="Acceuil" className="icons"/>
                        </NavLink>
                    </div>
                    <div className={!openMenu ? "div-link" : "div-link-open"}>
                        <NavLink to="/articles" className="navlink">
                            <img src={shop} alt="Articles" className="icons"/>
                        </NavLink>
                    </div>
                    <div className={!openMenu ? "div-link" : "div-link-open"}>
                        <NavLink to="/reseaux" className="navlink">
                            <img src={us} alt="contact" className="icons"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;