import React from "react";
import "../style/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects from "../projects.json";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    return (
        <div>
            <Navbar />
            <div className="hero">
                {/* {projects.map((projects, i)(
                    <ProjectCard
                        title={projects[i].title}
                        description={projects[i].description}
                        repoHeader={projects[i].repoHeader}
                        repoTag={projects[i].repoTag}
                        repoLink={projects[i].repoLink}
                        deployedHeader={projects[i].deployedHeader}
                        deployedTag={projects[i].deployedTag}
                        deployedLink={projects[i].deployedLink}
                        screenshot={projects[i].screenshot}
                        altText={projects[i].altText}
                    />
                ))} */}
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
                    tech={projects[0].tech}
                    techHeader={projects[0].techHeader}
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
                    tech={projects[1].tech}
                    techHeader={projects[1].techHeader}
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
                    tech={projects[2].tech}
                    techHeader={projects[2].techHeader}
                />
                <ProjectCard
                    title={projects[3].title}
                    description={projects[3].description}
                    repoHeader={projects[3].repoHeader}
                    repoTag={projects[3].repoTag}
                    repoLink={projects[3].repoLink}
                    deployedHeader={projects[3].deployedHeader}
                    deployedTag={projects[3].deployedTag}
                    deployedLink={projects[3].deployedLink}
                    screenshot={projects[3].screenshot}
                    altText={projects[3].altText}
                    tech={projects[3].tech}
                    techHeader={projects[3].techHeader}
                />
                <ProjectCard
                    title={projects[4].title}
                    description={projects[4].description}
                    repoHeader={projects[4].repoHeader}
                    repoTag={projects[4].repoTag}
                    repoLink={projects[4].repoLink}
                    deployedHeader={projects[4].deployedHeader}
                    deployedTag={projects[4].deployedTag}
                    deployedLink={projects[4].deployedLink}
                    screenshot={projects[4].screenshot}
                    altText={projects[4].altText}
                    tech={projects[4].tech}
                    techHeader={projects[4].techHeader}
                />
                <ProjectCard
                    title={projects[5].title}
                    description={projects[5].description}
                    repoHeader={projects[5].repoHeader}
                    repoTag={projects[5].repoTag}
                    repoLink={projects[5].repoLink}
                    deployedHeader={projects[5].deployedHeader}
                    deployedTag={projects[5].deployedTag}
                    deployedLink={projects[5].deployedLink}
                    screenshot={projects[5].screenshot}
                    altText={projects[5].altText}
                    tech={projects[5].tech}
                    techHeader={projects[5].techHeader}
                />
                <ProjectCard
                    title={projects[6].title}
                    description={projects[6].description}
                    repoHeader={projects[6].repoHeader}
                    repoTag={projects[6].repoTag}
                    repoLink={projects[6].repoLink}
                    deployedHeader={projects[6].deployedHeader}
                    deployedTag={projects[6].deployedTag}
                    deployedLink={projects[6].deployedLink}
                    screenshot={projects[6].screenshot}
                    altText={projects[6].altText}
                    tech={projects[6].tech}
                    techHeader={projects[6].techHeader}
                />

            </div>
            <Footer />
        </div>
    )

};

export default Portfolio;