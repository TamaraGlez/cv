import { useEffect, useState } from "react";
import "./App.scss";
import About from "./components/About";
// import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Habilities from "./components/Habilities";
import Hero from "./components/Hero";
import { CV } from "./CV/CV";
import { setHero } from "./redux/hero/hero.actions";

function App() {
  //destruccturing de cv
  const { hero, education, experience, habilities} = CV;
  const [mostrar, setMostrar] = useState()
  console.log(mostrar)

  useEffect(()=>{setHero(hero);}, [hero]);
  
  return (
    <div className="App">
      <div className="APP-nav" >
        <Hero hero={hero}/>
        {/* <Contact contact={hero.contact}/> */}
      </div>
      <div className="button" >
        <button className="button-btn" type="button" onClick={() => setMostrar("Education")}>Educación</button>
        <button className="button-btn" type="button" onClick={() => setMostrar("Experience")}>Experiencia</button>
        <button className="button-btn" type="button" onClick={() => setMostrar("Habilities")}>Habilidades</button>
        <button className="button-btn" type="button" onClick={() => setMostrar("About")}>Sobre Mi</button>
      </div>
      <div className="texButton">
        {mostrar === 'About' && <About about={hero.aboutMe}/>}
        {mostrar === 'Education' && <Education education={education}/>}
        {mostrar === 'Experience' && <Experience experience={experience}/>}
        {mostrar === 'Habilities' && <Habilities habilities={habilities}/>}
      </div>
    </div>
  );
}

export default App;
