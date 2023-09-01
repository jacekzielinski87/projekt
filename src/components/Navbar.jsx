// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li className="list-items"><a className="link" href="/">Strona główna</a></li>
                <li className="list-items"><a className="link" href="/">Aktualności</a></li>
                <li className="list-items"><a className="link" href="/">Recenzje</a></li>
                <li className="list-items"><a className="link" href="/">Filmy</a></li>
                <li className="list-items"><a className="link" href="/">Seriale</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;