import "./app.css";
import "./fonts/fonts.css";
import Intro from "./components/mobile/Intro";
import About from "./components/mobile/About";
import Experience from "./components/mobile/Experience";

function App(){
    return (
        <div className="mobile">
            <Intro />
            <About />
            <Experience />
        </div>
    );
}

export default App;