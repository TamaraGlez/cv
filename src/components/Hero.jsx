import React from 'react'
import { useSelector } from 'react-redux';
import './Hero.scss';

const Hero = () => {

  const {hero} = useSelector (state => state.hero)
  console.log(hero)

  return (
    <div className='hero' >
      <img className= "hero-imagenTam" src= {hero.image} alt = "imagenTamara"/>
      <div className='hero-datePersonals' >
        <h3>{hero.name}</h3>
        <p>{hero.adress}</p>
        <p>{hero.city}</p>
        <p>{hero.email}</p>
        <p>{hero.birthDate}</p>
        <p>{hero.phone}</p>
      </div>
    </div>
  )
}

export default Hero