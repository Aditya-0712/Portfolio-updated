import link from "../../../public/images/link.svg";

function Card({isProject, date, title, details, tags}){

    const renderTags = tags.map((x, ind) =>{
        return (<p key={ind}>{x}</p>);
    });

    return (
        <>
            <div className="exp">
                <p className="date">{date}</p>
                <p className="pos">{title}</p>
                <p className="details">{details}</p>
                <div className="labels">
                    {renderTags}
                </div>
                {isProject && 
                    <>
                        <img src={thumbnail} alt="pic" />
                        <a className="view" href="https://github.com/Aditya-0712/Interactive-Card-Details-Form" target="_blank">
                            <p>View Project</p>
                            <img src={link} alt="github" />
                        </a>
                    </>
                }
            </div>
        </>
    );
}

export default Card;