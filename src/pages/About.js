import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/about.css"
import me from "../assets/me-photo.jpg"
import logo from "../assets/CK-Logo.png"

function About() {
    return (
        <div>
            <Navbar />
            <div className="hero">
                <br></br>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-xs-2"></div>
                    <div className="card container col-lg-7 col-md-6 col-xs-8" id="portfolio-card" >
                        <div className="card-body">
                            <h1>About Me</h1>
                            <hr></hr>
                            <img className="Profile-Picture" src={ me } alt="It's me, at my wedding"></img>
                            <p>My name is Carl Koepke, I was born in Indianapolis, Indiana. I grew up in Eden Prairie, Minnesota, and went to college at the University of Wisconsin - Eau Claire.  </p>
                            <p>My whole life I've dealt with a genetic kidney disease, but in 2013 I was diagnosed with accute kidney failure.  It was a long process to find a kidney donor, but I was very lucky that my Uncle Dave was a match, and able to donate one of his kidneys.  I had a successful transplant surgery on April 22, 2014.</p>
                            <img className="Profile-Picture" src={ logo } alt="CK Web Desings Logo" className="about-logo"></img> 
                            <p>After I recovered from surgery, I worked for six years in the Cleanroom Testing industry.  The majority of cleanrooms in the Twin Cities area are used for medical device manufacturing, because medical devices need to be made in a sterile environment.  The company I worked for tested the environment inside of cleanrooms in order to determine if the cleanroom was a sterile enough environment for medical device manufacturing. </p>
                            <p>At the start of the Covid-19 pandemic in 2020, I was lucky enough to be able to work from home for the first few months.  As a result of my kidney transplant and the myriad of imuno-suppresant medications I have to take, I am very high risk for the virus.  This eventually resulted in me losing my job, and starting a virtual coding bootcamp at the University of Minnesota. Hopefully a bright future in coding is ahead of me.   </p>
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

export default About;