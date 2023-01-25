import './App.scss';
import About from './components/About';
import Education from './components/Education';
import Hero from './components/Hero';
import { CV } from './CV/CV';

function App() {
  console.log(CV)
  //destruccturing de cv
  const {hero, education, experience, habilities, unregulatedStudies } = CV
  
  return (

    <div className="App">
      <Hero hero={hero}/>
      <About about={hero.aboutMe} />
      <Education education={education} ></Education>

    </div>
  );
}

export default App;
