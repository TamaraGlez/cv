import { useEffect, useState } from "react";
import "./App.scss";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Habilities from "./components/Habilities";
import Hero from "./components/Hero";
import { CV } from "./CV/CV";
import { setHero } from "./redux/hero/hero.actions";

function App() {
  //destruccturing de cv
  const { hero, education, experience, habilities} = CV;
  const [mostrar, setMostrar] = useState('Hero')
  console.log(mostrar)

  useEffect(()=>{setHero(hero);}, [hero]);
  
  return (
    <div className="App">
      <div>
        <About about={hero.aboutMe}/>
      </div>
      <div className="button" >
        <button className="button-btn" type="button" onClick={() => setMostrar("Hero")}>Datos personales</button>
        <button className="button-btn" type="button" onClick={() => setMostrar("Education")}>Educación</button>
        <button className="button-btn" type="button" onClick={() => setMostrar("Experience")}>Experiencia</button>
        <button className="button-btn" type="button" onClick={() => setMostrar("Habilities")}>Habilidades</button>
      </div>
      <div className="texButton">
        {mostrar === 'Hero' && <Hero hero={hero}/>}
        {mostrar === 'Education' && <Education education={education}/>}
        {mostrar === 'Experience' && <Experience experience={experience}/>}
        {mostrar === 'Habilities' && <Habilities habilities={habilities}/>}
      </div>
    </div>
  );
}

export default App;

//como mostrar more + estudios a la vez 