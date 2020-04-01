import React, { Component } from "react";

class ParentChildren extends Component {
  render() {
    return this.props.children ? this.props.children : <h1>No props passed</h1>;
  }
}

export default ParentChildren;
