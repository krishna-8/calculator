import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    calcHistory: [],
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
    // if (buttonName==="=") {
    //   console.log(this.state.total) // this total is not the current total it is the previous saved value.
    // }
  };

  componentDidUpdate() {
    console.log(this.state.calcHistory);
  }

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
