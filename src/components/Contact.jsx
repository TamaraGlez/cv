import React from "react";
import "./Contact.scss";

const Contact = ({ contact }) => {
  return (
    <div>
      {contact.map((cont, index) => {
        return (
          <div className="contact" key={index}>
          <a href={cont.gitHub} ><button className='github'></button></a>
            <a href={cont.linkedin} ><button className='linkedin'></button></a>
            <a href="tamara.g.ruiz@gmail.com" ><button className='gmail'></button></a>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
