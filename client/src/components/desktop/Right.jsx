import About from "../mobile/About";
import Experience from "../mobile/Experience";
import Projects from "../mobile/Projects";

function Right(){
    return (
        <div className="right">
            <About isPc={true} />

            <Experience isPc={true} />

            <Projects isPc={true} />

            <p className="tmp1">Thank you!</p>
            <p className="tmp2">More incoming...</p>
        </div>
    );
}

export default Right;