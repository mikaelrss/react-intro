import React from "react";

// function Title() {
//   return null
// }

function Title(props) {
  if (props.small) return <h2>{props.children}</h2>;
  return <h1>{props.children}</h1>;
}

export default Title;
