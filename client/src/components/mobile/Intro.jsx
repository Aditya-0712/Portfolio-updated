import github from "../../../public/images/github.svg";
import linkedin from "../../../public/images/lnkedin.svg";
import codepen from "../../../public/images/codepen.svg";
import instagram from "../../../public/images/instagram.svg";
import x from "../../../public/images/x.svg";

function Intro(){
    return (
        <>
            <p className="title">Aditya Batgeri</p>
            <p className="heading">Full Stack Developer</p>
            <p className="desc">I Design, Build and Manage Scalable Web Applications from Frontend to Backend.</p>

            <div className="socials">
                <a href="https://github.com/Aditya-0712" target="_blank"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/aditya-batgeri-00675122b/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://codepen.io/Aditya-0712" target="_blank"><img src={codepen} alt="codepen" /></a>
                <a href="https://www.instagram.com/aditya.batgeri/" target="_blank"><img src={instagram} alt="instagram" /></a>
                <a href=""><img src={x} alt="x" /></a>
            </div>

            <a href="../../../public/resume/aditya_overleaf_4.pdf" download className="resume">
                Get Resume
            </a>
        </>
    );
}

export default Intro;