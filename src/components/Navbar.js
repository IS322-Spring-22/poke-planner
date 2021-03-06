import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar(){
    const location = useLocation();

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Poke Planner</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link ${(location.pathname === "/"? "active": "")}`} aria-current="page" href="/">Pokedex</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${(location.pathname === "/teams"? "active": "")}`} href="/teams">Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
