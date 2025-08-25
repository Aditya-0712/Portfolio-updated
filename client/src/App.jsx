import "./app.css";
import "./fonts/fonts.css";
import Intro from "./components/mobile/Intro";
import About from "./components/mobile/About";

function App(){
    return (
        <div className="mobile">
            <Intro />
            <About />
        </div>
    );
}

export default App;