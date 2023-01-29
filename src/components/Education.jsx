import React from "react";
import './Education.scss';

const Education = ({ education }) => {
  console.log(education);

  return (
    <div className="containerEdu">
      {education.map((edu, index) => {
        
        return(
        <div key={index} className="containerEdu-text">
          <h3>{edu.name}</h3>
          <p>{edu.type}</p>
          <p>{edu.dateTime}</p>
          <p>{edu.description}</p>
        </div>
        )
      })}
    </div>
  );
};

export default Education;
