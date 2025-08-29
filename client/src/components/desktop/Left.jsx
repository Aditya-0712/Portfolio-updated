import { useState } from "react";

function Left(){
    const [section, setSection] = useState({
        about: true,
        experience: false,
        projects: false
    });
    
    return (
        <div className="left">
            <p className="pc_title">Aditya Batgeri</p>
                <p className="pc_heading">Sofware Engineer</p>
                <p className="pc_desc">I Design, Build and Manage Scalable Software Applications from Frontend to Backend.</p>

                <a href="../../../resume/aditya_overleaf_6.pdf" download className="resume">
                    Get Resume
                </a>

                <div className="section">
                    <div className="tmp" onClick={()=>{setSection({about:true, experience:false, projects:false})}}>
                        <span style={{backgroundColor:section.about?"white":"", width:section.about?"5vw":""}}></span>
                        <p style={{color:section.about?"white":""}}>ABOUT</p>
                    </div>
                    <div className="tmp" onClick={()=>{setSection({about:false, experience:true, projects:false})}}>
                        <span style={{backgroundColor:section.experience?"white":"", width:section.experience?"5vw":""}}></span>
                        <p style={{color:section.experience?"white":""}}>EXPERIENCE</p>
                    </div>
                    <div className="tmp" onClick={()=>{setSection({about:false, experience:false, projects:true}); scrollToProjects()}}>
                        <span style={{backgroundColor:section.projects?"white":"", width:section.projects?"5vw":""}}></span>
                        <p style={{color:section.projects?"white":""}}>PROJECTS</p>
                    </div>
                </div>

                <div className="socials">
                    <a href="https://github.com/Aditya-0712" target="_blank"><img src="./images/github.svg" alt="github" /></a>
                    <a href="https://www.linkedin.com/in/aditya-batgeri-00675122b/" target="_blank"><img src="./images/lnkedin.svg" alt="linkedin" /></a>
                    <a href="https://codepen.io/Aditya-0712" target="_blank"><img src="./images/codepen.svg" alt="codepen" /></a>
                    <a href="https://www.instagram.com/aditya.batgeri/" target="_blank"><img src="./images/instagram.svg" alt="instagram" /></a>
                    <a href=""><img src="./images/x.svg" alt="x" /></a>
                </div>
        </div> 
    );
}

export default Left;