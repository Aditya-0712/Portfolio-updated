import Card from "./Card";

function Experience({isPc}) {
    const content={
        date: "2024 JANUARY - MARCH",
        title: "Intern at Next24 Technologies", 
        details: "I was thrilled to be selected as a Web Development intern at Next24 Technologies, a dynamic startup based in Noida. This opportunity came through the government internship portal AICTE and spanned two months in an online format. Each week, I received various tasks that I needed to complete before their respective deadlines and present during our weekly meetings. My responsibilities ranged from creating Figma designs and implementing frontend features to handling backend operations like authentication, validation, and session management. Additionally, I worked on developing parody websites and continually expanded my knowledge by learning new concepts.",
        tags: ["HTML", "CSS", "Javascript", "NodeJS", "EJS", "Express.js", "Mongodb"]
    }

    return (
        <>
            {!isPc && <p className="about" id="experience">EXPERIENCE</p>}
            <Card isProject={false} date={content.date} title={content.title} details={content.details} tags={content.tags} />
        </>
    );
}

export default Experience;