import React from 'react'

const Habilities = ({ habilities }) => {
  console.log(habilities)
  return (
    <div>
      {habilities.map((hab, index)=> {
        return (
          <div key = {index}>
            <h3>{hab}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Habilities