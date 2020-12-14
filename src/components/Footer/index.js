import React from "react";
import "./style.css";

function Footer() {
    return (
        <div>
            <div className="row" id="footer-stripe"></div>
            <div className="row footer" >
                <div className="col-4"></div>
                <a className="col-4 text-muted align-middle" href="https://github.com/Carl-33"> &copy; Carl Koepke</a>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Footer;