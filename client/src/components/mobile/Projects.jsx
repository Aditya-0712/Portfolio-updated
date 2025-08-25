function Projects(){
    return (
        <>
            <p className="about" id="projects">PROJECTS</p>
            <div className="exp">
                <p className="date">2024 - PRESENT</p>
                <p className="pos">Interactive Card Details Form</p>
                <p className="details">I built an interactive card details form, ensuring it closely matched the provided design. For this project, I had the freedom to use any tools, allowing me to practice and experiment with various technologies. The form I developed enables users to fill in their card details and see real-time updates on the card image. It also provides error messages upon submission if any input field is empty or if the card number, expiry date, or CVC fields are incorrectly formatted. Additionally, the form adapts to different screen sizes for an optimal layout and includes hover, active, and focus states for all interactive elements..</p>
                <div className="labels">
                    <p>HTML</p><p>CSS</p><p>Javascript</p>
                </div>
                <img src="./public/images/card.png" alt="pic" />
                <a className="view" href="https://github.com/Aditya-0712/Interactive-Card-Details-Form" target="_blank">
                    <p>View Project</p>
                    <img src="./public/images/link.svg" alt="github" />
                </a>
            </div>
        </>
    );
}

export default Projects;