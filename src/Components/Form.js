import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react"
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleCommentChange = event => {
    this.setState({
      comments: event.target.value
    });
  };

  handleTopicChange = event => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.username}  ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" onChange={this.handleUsernameChange} value={username}></input>
        </div>
        <div>
          <label>Comments</label>
          <input type="text" onChange={this.handleCommentChange} value={comments}></input>
        </div>
        <div>
          <label>Topic</label>
          <select onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
