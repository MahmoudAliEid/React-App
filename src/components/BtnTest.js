import React, { Component } from "react";

class Btn extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    //to conect the function
    this.eventHandler = this.eventHandler.bind(this);
  }
  //make a function to handel the event
  eventHandler() {
    this.setState((perState) => {
      return {
        number: perState.number + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button className="btn btn-primary" onClick={this.eventHandler}>
          Cleck me!
        </button>
      </div>
    );
  }
}
export default Btn;
