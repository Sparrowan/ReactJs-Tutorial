import React from "react";

function Team(props) {
  return (
    <div>
      <h1>
        {props.index + 1} {props.team}
      </h1>
    </div>
  );
}

export default Team;
