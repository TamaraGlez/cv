import React from "react";
import './About.scss';

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

