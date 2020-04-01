import React from "react";

function Columns() {
  const items = [
    { id: 1, name: "John", age: 30, car: null },
    { id: 2, name: "Alphius", age: 25, car: true }
  ];
  let message;
  return (
    <React.Fragment>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          {item.car ? (message = "has car") : (message = "Does not have car")}
          {/* <p>{message}</p> */}
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Alphius</td>
    </React.Fragment>
  );
}

export default Columns;
