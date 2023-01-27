import React from 'react'
import { useSelector } from 'react-redux';
import './Hero.scss';

const Hero = () => {

  const {hero} = useSelector (state => state.hero)
  console.log(hero)

  return (
    <div>
      <img className= "imagenTam" src= {hero.image} alt = "imagen"/>
      <h3>{hero.name}</h3>
      <p>{hero.adress}</p>
      <p>{hero.city}</p>
      <p>{hero.email}</p>
      <p>{hero.birthDate}</p>
      <p>{hero.phone}</p>
      <p>{hero.gitHub}</p>
    </div>
  )
}

export default Hero