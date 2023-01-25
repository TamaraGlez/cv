import React from 'react'

const Hero = ({hero}) => {
  console.log(hero)
  return (
    <div>
      <h3>{hero.name}</h3>
      <p>{hero.adress}</p>
      <p>{hero.city}</p>
      <p>{hero.email}</p>
      <p>{hero.birthDate}</p>
      <p>{hero.phone}</p>
      <p>{hero.image}</p>
      <p>{hero.gitHub}</p>
    </div>
  )
}

export default Hero