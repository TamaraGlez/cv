import React from 'react'
import './Experience.scss';

const Experience = ({ experience }) => {
  console.log(experience)
  return (
    <div className="containerExp">
      {experience.map((expe, index)=> {
        return (
          <div key={index} className="containerExp-text">
            <h3>{expe.name}</h3>
            <p>{expe.date}</p>
            <p>{expe.where}</p>
            <p>{expe.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Experience