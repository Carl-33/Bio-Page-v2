import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
    const location = useLocation();

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand mb-0 h1 "> Carl Koepke </span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
           <div class="collapse navbar-collapse" id="navbarText">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" || location.pathname === "/about"  ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={location.pathname ==="/contact" ? "nav-link active" : "nav-link"}>
                           Contact 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname ==="/portfolio" ? "nav-link active" : "nav-link"}>
                           Portfolio
                        </Link>
                    </li>
                </ul>
           </div>
        </nav>
    );
}

export default Navbar;
