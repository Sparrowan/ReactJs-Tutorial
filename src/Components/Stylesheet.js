import React from "react";
import "./myStyle.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className="primary">Stylesheets</h1>
      <h1 className={className}>Stylesheets conditional</h1>
      <h1 className={`${className} font-xl`}>Stylesheets mutiple classes</h1>
    </div>
  );
}

export default Stylesheet;
