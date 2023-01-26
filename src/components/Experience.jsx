import React from 'react'

const Experience = ({ experience }) => {
  console.log(experience)
  return (
    <div>
      {experience.map((expe, index)=> {
        return (
          <div key={index}>
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