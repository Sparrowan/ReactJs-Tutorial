import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Clicked button function");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}

export default FunctionClick;
