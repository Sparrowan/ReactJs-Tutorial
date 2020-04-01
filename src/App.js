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
import LifecycleA from "./Components/LifecycleA";
import Table from "./Components/Table";
import FragmentDemo from "./Components/FragmentDemo";
import ParentComp from "./Components/ParentComp";
import RefsDemo from "./Components/RefsDemo";
import FocusInput from "./Components/FocusInput";
import ForwardRefParent from "./Components/ForwardRefParent";
import PortalDemo from "./Components/PortalDemo";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import ChildChildren1 from "./Components/ChildChildren1";
import ParentChildren from "./Components/ParentChildren";
import ChildChildren2 from "./Components/ChildChildren2";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import HoverCounterTwo from "./Components/HoverCounterTwo";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import User from "./Components/User";
import CounterTwo from "./Components/CounterTwo";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/userContext";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        {/* <PostList /> */}
        {/* <UserProvider value="Alphius">
          <ComponentC />
        </UserProvider> */}
        {/* <CounterTwo/> */}
        {/* <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>

        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo> */}
        {/* <User render={(isLoggedIn) =>isLoggedIn ? "Alphius" :"Guest"} /> */}
        {/* <HoverCounter /> */}
        {/* <ClickCounter name="Alphius" /> */}
        {/* <ParentChildren >
        <ChildChildren1 />
        <ChildChildren2 />
        </ParentChildren> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <ForwardRefParent /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
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
