import React, { Component } from "react";
import FuncComponent from "./FuncComponent";
import ClassComponent from "./ClassComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hey</h1>
        <FuncComponent />
        <ClassComponent />
      </div>
    );
  }
}

export default ParentComponent;
