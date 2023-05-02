import './App.css';
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import Technologies from "../Technologies/Technologies";
import Marquee from "../Marquee/Marquee";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Contacts from "../Contacts/Contacts";
import React from "react";

function App() {
    const [burgerMenuOpened, setBurgerMenuOpened] = React.useState(false);
    const openBurgerMenu = () => {
        if(!burgerMenuOpened) {
            setBurgerMenuOpened(true);
        } else {
            setBurgerMenuOpened(false);
        }
    }

  return (
    <div className="App">
        <Header openBurgerMenu={openBurgerMenu} burgerMenuOpened={burgerMenuOpened}/>
        <Cover burgerMenuOpened={burgerMenuOpened}/>
        <Marquee />
        <Technologies burgerMenuOpened={burgerMenuOpened}/>
        <Projects burgerMenuOpened={burgerMenuOpened} />
        <AboutMe burgerMenuOpened={burgerMenuOpened} />
    </div>
  );
}

export default App;

/*
        <Contacts />
 */
