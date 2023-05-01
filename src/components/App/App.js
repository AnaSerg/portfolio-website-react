import './App.css';
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import Technologies from "../Technologies/Technologies";
import Marquee from "../Marquee/Marquee";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
        <Header />
        <Cover />
        <Marquee />
        <Technologies />
        <Projects />
        <AboutMe />
    </div>
  );
}

export default App;
