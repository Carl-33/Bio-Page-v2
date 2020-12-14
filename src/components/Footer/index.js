import React from "react";
import "./style.css";

function Footer() {
    return (
        <div>
            <div className="row" id="footer-stripe"></div>
            <div className="row footer" >
                <div className="col-5"></div>
                <span className="col-2 text-muted align-middle"> &copy; Carl Koepke</span>
                <div className="col-5"></div>
            </div>
        </div>
    )
}

export default Footer;