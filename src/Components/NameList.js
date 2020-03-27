import React from "react";

import Person from "./Person";
import Team from "./Team";

function NameList() {
  const footBall = ["Man utd", "Liverpool", "Chelsea", "Arsenal"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular"
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue"
    }
  ];
  const teamsList = footBall.map((team, index) => (
    <Team key={index} team={team} index={index} />
  ));
  const personList = persons.map(person => (
    <Person key={person.id} person={person}  />
  ));
  return (
    <div>
      <div>{personList}</div>
      <div>{teamsList}</div>
    </div>
  );
}

export default NameList;
