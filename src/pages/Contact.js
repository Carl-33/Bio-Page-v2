import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/contact.css"
import resume from "../assets/Resume-Carl-Koepke.pdf"

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
                            <br></br>
                            <h2> Connect With Me </h2>
                            <hr></hr>
                            <p className="contact-links">GitHub: </p><a className="contact-links" href="https://github.com/Carl-33" target="_blank">Carl-33</a>
                            <br></br>
                            <p className="contact-links">LinkdIn: </p><a className="contact-links" href="https://www.linkedin.com/in/carl-koepke/" target="_blank">LinkedIn Profile</a>
                            <br></br>
                            <p className="contact-links">Resume: </p><a className="contact-links" href={resume} target="_blank">Resume</a>
                            <br></br>
                            <p className="contact-links">Portfolio: </p><a className="contact-links" href="/portfolio">Portfolio</a>
                            <br></br>
                            <br></br>
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-xs-2"></div>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <Footer />
        </div>
    )

};

export default Contact;