import './App.css';
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import Technologies from "../Technologies/Technologies";
import Marquee from "../Marquee/Marquee";
import Projects from "../Projects/Projects";

function App() {
  return (
    <div className="App">
        <Header />
        <Cover />
        <Marquee />
        <Technologies />
        <Projects />

    </div>
  );
}

export default App;
