import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import ClassClick from "./Components/ClassClick";
import FunctionClick from "./Components/FunctionClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";
import Inline from "./Components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={false}/> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">This is props children</Greet>
        <Greet name="Oliver" heroName="Green Arrow" />
        <Greet name="Diana" heroName="Wonder Woman" />
        
        <Welcome name="Bruce" heroName="Batman">This is props children</Welcome>
        <Welcome name="Oliver" heroName="Green Arrow" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
