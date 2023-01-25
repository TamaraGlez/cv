import { useState } from "react";
import "./App.scss";
import About from "./components/About";
import Education from "./components/Education";
import Hero from "./components/Hero";
import { CV } from "./CV/CV";

function App() {
  //destruccturing de cv
  const { hero, education, experience, habilities, unregulatedStudies } = CV;
  const [mostrar, setMostrar] = useState('About')
  console.log(mostrar)
  return (
    <div>
      <div className="App">
        <Hero hero={hero} />
        <button type="button" onClick={() => setMostrar("About")}>sobre mi</button>
        <About about={hero.aboutMe} />
        <Education education={education}></Education>
      </div>
    </div>
  );
}

export default App;
