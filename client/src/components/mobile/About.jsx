function About({isPc}){
    return (
        <>
            {!isPc && <p className="about">ABOUT ME</p>}
            <p className="me">
                I am Aditya Batgeri, a <span className="span1">Computer Science</span> graduate from Pune Vidyarthi Griha College of Engineering and Technology, affiliated with Savitribai Phule Pune University. With hands-on experience in both <span className="span1">front-end</span> and <span className="span1">back-end development</span>, I specialize in building secure and scalable applications. My expertise spans <span className="span1">authentication</span>, <span className="span1">JWT-based authorization</span>, and <span className="span1">OAuth2 integrations</span>, along with proficiency in managing databases like <span className="span1">PostgreSQL</span> and <span className="span1">MongoDB</span>. Over the past two years, I have strengthened my skills in C++, Python, Java, and JavaScript, while advancing into <span className="span1">Spring Boot</span>, <span className="span1">Node.js</span>, and modern frameworks such as React.js.<br /><br />
                My technical journey also extends into <span className="span1">data science</span>, <span className="span1">AI/ML</span>, and <span className="span1">data visualization</span>, where I have applied tools like pandas, NLTK, scikit-learn, Matplotlib, and Seaborn to build analytical and predictive solutions. I have deployed projects on <span className="span1">AWS</span>, leveraging cloud infrastructure for real-world applications, and gained practical exposure to integrating APIs, securing systems, and handling production-ready deployments. <br /><br />
                As a passionate developer, I continuously push myself to explore new technologies while working on impactful projects such as  <span className="span1">real-time chat systems</span>, chatbot automation. Beyond development, I have contributed to academia by publishing a <span className="span1">research paper on GNSS</span>, and participated in several collaborative, project-based learning programs that further sharpened my technical and problem-solving skills.
            </p>
        </>
    );
}

export default About;