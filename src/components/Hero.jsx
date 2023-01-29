import React from "react";
import { useSelector } from "react-redux";
import "./Hero.scss";

const Hero = () => {
  const { hero } = useSelector((state) => state.hero);
  console.log(hero);

  return (
    <div className="hero">
      <div className="hero-containterImg"  >
        <img className="hero-imgTam" src={hero.image} alt="imagenTamara" />
      </div>
      <div className="hero-name">
        <h1 className="hero-nombreTam" >{hero.name}</h1>
      </div>

    </div>
  );
};

export default Hero;
