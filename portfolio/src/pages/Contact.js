import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
                            <h1>Contact </h1>
                            <hr></hr>
                            <p>Name</p>
                            <div className="input-group flex-nowrap">
                                <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping"></input>
                            </div>
                            <br></br>
                            <p>Email</p>
                            <div className="input-group flex-nowrap">
                                <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping"></input>
                            </div>
                            <br></br>
                            <p>Message</p>
                            <textarea className="form-control" placeholder="Message" aria-label="Message"></textarea>
                            <br></br>
                            <button type="button" className="btn btn-info">Submit</button>
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