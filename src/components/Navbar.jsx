// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/gamin small.png";


const Navbar = () => {
    return (
        <nav className="navigation">
            <img className="logo" src={Logo}></img>
                <p className="description">Miejsce dla każdego gracza</p>
            <ul className="nav-list">
                <li className="list-items"><a className="link" href="/">Strona główna</a></li>
                <li className="list-items"><a className="link" href="/">Aktualności</a></li>
                <li className="list-items"><a className="link" href="/">Recenzje</a></li>
                <li className="list-items"><a className="link" href="/">Retro</a></li>
                <li className="list-items"><a className="link" href="/">Książki</a></li>
                <li className="list-items"><a className="link" href="/">Filmy i seriale</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;