function Card({isProject, date, title, details, tags, thumbnail, site}){

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
                        <a className="view" href={site} target="_blank">
                            <p>View Project</p>
                            <img src="./images/link.svg" alt="github" />
                        </a>
                    </>
                }
            </div>
        </>
    );
}

export default Card;