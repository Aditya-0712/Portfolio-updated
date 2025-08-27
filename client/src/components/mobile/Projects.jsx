import Card from "./Card";
import {projects} from "../../assets/data.js";

function Projects({isPc}){
    const renderProjects = projects.map((x, ind) =>{
        return (<Card key={ind} isProject={x.isProject} date={x.date} title={x.title} details={x.details} tags={x.tags} thumbnail={x.thumbnail} site={x.site} />);
    })

    return (
        <>
            {!isPc && <p className="about" id="projects">PROJECTS</p>}
            {renderProjects}
        </>
    );
}

export default Projects;