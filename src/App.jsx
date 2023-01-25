// import { useState } from "react";
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
  // const [mostrar, setMostrar] = useState('About')
  return (
    <div>
      <div className="App">
        <Hero hero={hero} />
        <About about={hero.aboutMe} />
        <Education education={education}/>
        <Experience/>
        <Habilities/>

  
      </div>
    </div>
  );
}

export default App;
{/* <button type="button" onClick={() => setMostrar("About")}>sobre mi</button> */}