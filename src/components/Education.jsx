import React from "react";

const Education = ({ education }) => {
  console.log(education);
  return (
    <div>
      {education.map((edu, index) => {
        return(
        <div key={index}>
          <h3>{edu.name}</h3>
          <p>{edu.date}</p>
          <p>{edu.where}</p>
        </div>
        )
      })}
    </div>
  );
};

export default Education;
