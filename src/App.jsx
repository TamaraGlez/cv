import { useEffect, useState } from "react";
import "./App.scss";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Habilities from "./components/Habilities";
import Hero from "./components/Hero";
import More from "./components/More";
import { CV } from "./CV/CV";
import { setHero } from "./redux/hero/hero.actions";

function App() {
  //destruccturing de cv
  const { hero, education, experience, habilities, more } = CV;
  const [mostrar, setMostrar] = useState('Hero')
  console.log(mostrar)

  useEffect(()=>{setHero(hero);}, [hero]);
  
  return (
    <div>
      <div className="App">
        <Hero hero={hero} />
        <More more={more}/>

        <button type="button" onClick={() => setMostrar("About")}>Sobre mi</button>
        <button type="button" onClick={() => setMostrar("Education")}>Educación</button>
        <button type="button" onClick={() => setMostrar("Experience")}>Experiencia</button>
        <button type="button" onClick={() => setMostrar("Habilities")}>Habilidades</button>
        {mostrar === 'About' && <About about={hero.aboutMe}/>}
        {mostrar === 'Education' && <Education education={education}/>}
        {mostrar === 'Experience' && <Experience experience={experience}/>}
        {mostrar === 'Habilities' && <Habilities habilities={habilities}/>}
      </div>
    </div>
  );
}

export default App;