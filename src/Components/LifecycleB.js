import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alphius"
    };
    console.log("LifecycleB constructor");

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      name: "Alphius Changed"
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return null
  }
  getSnapshotBeforeUpdate() {
    console.log("LifecycleB getSnapshotBeforeUpdate");

    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }
  render() {
    console.log("LifecycleB render");
    return (
      <div>
        <div>Lifecycle B</div>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default LifecycleB;
