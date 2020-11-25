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
            <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>

            <div className="row">

                <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
                <img className="portfolio col-lg-8 col-md-8 col-sm-8 col-8" src={props.screenshot} alt={props.altText}></img>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
                <div className="card-body">
                    <div className="row">
                        <p>{props.repoHeader}</p>
                        <a href={props.repoLink} target="_blank">{props.repoTag}</a>
                    </div>
                    <div className="row">
                        <p>{props.deployedHeader}</p>
                        <a href={props.deployedLink} target="_blank">{props.deployedTag}</a>
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