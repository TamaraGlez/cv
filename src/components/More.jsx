import React from "react";
import "./More.scss";

const More = ({ more }) => {
  console.log(more);

  return (
    <div>
      {more.map((mor, index) => {
        return (
          <div key={index}>
            <h3>{mor.name}</h3>
          </div>
        )
      })}
    </div>
  );
};

export default More;
