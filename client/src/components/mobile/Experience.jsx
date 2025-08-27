import Card from "./Card";
import {experience} from "../../assets/data.js";

function Experience({isPc}) {

    const renderExperience = experience.map((x, ind) =>{
        return (<Card key={ind} isProject={x.isProject} date={x.date} title={x.title} details={x.details} tags={x.tags} />);
    })

    return (
        <>
            {!isPc && <p className="about" id="experience">EXPERIENCE</p>}
            {renderExperience}
        </>
    );
}

export default Experience;