import React from "react";
import "./stylesheet.css";

function Technologycard(props) {
  const { name, imgurl } = props.skill;

  return (
    <div>
      <img className="img-size" data-aos="flip-left" src={imgurl} alt={name} />
      <figcaption className="text-center">{name}</figcaption>
    </div>
  );
}

export default Technologycard;
