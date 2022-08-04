import React from "react";
import Title from "./Title";

function Dog(props) {
  console.log(props);
  return (
    <div>
      <Title small>{props.title}</Title>
      <img src={props.image} className="dog" alt={props.title} />
    </div>
  );
}

export default Dog;
