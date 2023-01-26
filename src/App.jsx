import { useState } from "react";
import "./App.scss";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Habilities from "./components/Habilities";
import Hero from "./components/Hero";
import { CV } from "./CV/CV";

function App() {
  //destruccturing de cv
  const { hero, education, experience, habilities } = CV;
  const [mostrar, setMostrar] = useState('About')
  console.log(mostrar)
  return (
    <div>
      <div className="App">
        <Hero hero={hero} />
        <button type="button" onClick={() => setMostrar("About")}>Sobre mi</button>
        <button type="button" onClick={() => setMostrar("Education")}>Educación</button>
        <button type="button" onClick={() => setMostrar("Experience")}>Experiencia</button>
        {mostrar === 'About' && <About about={hero.aboutMe}/>}
        {mostrar === 'Educacion' && <Education education={education}/>}
        {mostrar === 'Experience' && <Experience experience={experience}/>}
        
        <Habilities habilities={habilities}/>

  
      </div>
    </div>
  );
}

export default App;