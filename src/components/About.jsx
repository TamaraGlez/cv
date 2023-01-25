import React from "react";

const About = ({ about }) => {
  console.log(about);
  return (
    <div>
      {about.map((abo, index) => {
        return (
        <div key={index}>
          <p>{abo.info}</p>
        </div>
      )
      })}
    </div>
  );
};
export default About;

