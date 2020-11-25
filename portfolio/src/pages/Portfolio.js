import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import projects from "../projects.json"
import ProjectCard from "../components/ProjectCard"

function Portfolio() {
    return (
        <div>
            <div className="hero">
            <Navbar />
                <ProjectCard
                title={projects[0].title}
                description={projects[0].description}
                repoHeader={projects[0].repoHeader}
                repoTag={projects[0].repoTag}
                repoLink={projects[0].repoLink}
                deployedHeader={projects[0].deployedHeader}
                deployedTag={projects[0].deployedTag}
                deployedLink={projects[0].deployedLink}
                screenshot={projects[0].screenshot}
                altText={projects[0].altText}
                />
                <ProjectCard
                title={projects[1].title}
                description={projects[1].description}
                repoHeader={projects[1].repoHeader}   
                repoTag={projects[1].repoTag}
                repoLink={projects[1].repoLink}
                deployedHeader={projects[1].deployedHeader}
                deployedTag={projects[1].deployedTag}
                deployedLink={projects[1].deployedLink}
                screenshot={projects[1].screenshot}
                altText={projects[1].altText}
                />
                <ProjectCard   
                title={projects[2].title}
                description={projects[2].description}
                repoHeader={projects[2].repoHeader}
                repoTag={projects[2].repoTag}
                repoLink={projects[2].repoLink}
                deployedHeader={projects[2].deployedHeader}
                deployedTag={projects[2].deployedTag}
                deployedLink={projects[2].deployedLink}
                screenshot={projects[2].screenshot}
                altText={projects[2].altText}
                />
            
            <Footer />
            </div>
        </div>
    )

};

export default Portfolio;