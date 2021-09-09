import React from "react";
import "./style.css";


function ProjectCard(props) {
    return (
        <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2"></div>
        <div className="card col-xl-7 col-lg-7 col-md-6 col-sm-8 col-8">
            <div className="card-body">
           <h2 className="card-title">{props.title}</h2>
            <p >{props.description}</p>
            <h5 className="tech">{props.techHeader} </h5>
                    <p>{props.tech}</p>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
            <div className="row">

                <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
                <img className="portfolio col-lg-8 col-md-8 col-sm-8 col-8" src={props.screenshot} alt={props.altText}></img>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
                <div className="card-body">
                {/* <div className="row">
                    <h5 className="tech">{props.techHeader} </h5>
                    <p>{props.tech}</p>
                </div> */}
                    <div className="row linksDiv">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>
                        <a calssName="col-lg-2 col-md-2 col-sm-2 col-2" href={props.repoLink} target="_blank">{props.repoTag}</a>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>
                    </div>
                    <div className="row linksDiv">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>
                        <a calssName="col-lg-2 col-md-2 col-sm-2 col-2" href={props.deployedLink} target="_blank">{props.deployedTag}</a>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-2 col-2"></div>
        </div>

    );
}

export default ProjectCard;