import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/contact.css"
import resume from "../assets/carl-resume.pdf"

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="hero">
                <br></br>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-xs-2"></div>
                    <div className="card container col-lg-7 col-md-6 col-xs-8" id="contact-container">
                        <div className="card-body">
                            <h1>Contact Me </h1>
                            <hr></hr>
                            <p>Email: koepkecj@gmail.com</p>
                            <br></br>
                            <p>Phone: 612-364-6332</p>
                            <br></br>
                            <p className="contact-links">GitHub: </p><a className="contact-links" href="https://github.com/Carl-33">Carl-33</a>
                            <br></br>
                            <p className="contact-links">LinkdIn: </p><a className="contact-links" href="https://www.linkedin.com/in/carl-koepke-15844082/">LinkedIn Profile</a>
                            <br></br>
                            <p className="contact-links">Portfolio: </p><a className="contact-links" href={resume}>Resume</a>
                            <br></br>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-xs-2"></div>
                </div>
                <br></br>
            </div>
            <Footer />
        </div>
    )

};

export default Contact;