import "./app.css";
import "./fonts/fonts.css";
import Intro from "./components/mobile/Intro";
import About from "./components/mobile/About";
import Experience from "./components/mobile/Experience";
import Projects from "./components/mobile/Projects";
import Left from "./components/desktop/Left";
import Right from "./components/desktop/Right";

function App(){

    return (
        <>
            <div className="mobile">
                <Intro />
                <About isPc={false} />
                <Experience isPc={false} />
                <Projects isPc={false} />
                <p className="heading">Thank you!</p>
                <p className="desc">More incoming...</p>
            </div>

            <div className="pc">
                <Left />
                <Right />
            </div>
        </>
    );
}

export default App;