import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

class ForwardRefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.handleRef = this.handleRef.bind(this);
  }

  handleRef = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <ForwardRef ref={this.inputRef} />
        <button onClick={this.handleRef}>Focus Input</button>
      </div>
    );
  }
}

export default ForwardRefParent;
