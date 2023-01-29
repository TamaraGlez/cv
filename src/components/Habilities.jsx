import React from 'react'
import './Habilities.scss';

const Habilities = ({ habilities }) => {
  console.log(habilities)
  return (
    <div className='containerHab' >
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