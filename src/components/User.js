import React, { Component } from "react";
import UserItem from "./UserItem";
import Data from "./Data";

class User extends Component {
  constructor() {
    super();
    this.state = {
      Data: Data,
      counter: 0,
      newArr: [],
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler() {
    if (this.state.counter < this.state.Data.length) {
      //push item form old array to new one
      this.state.newArr.push(this.state.Data[this.state.counter]);
      //make counter
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
      //make a map to return each element form new arr
      this.member = this.state.newArr.map((ele) => {
        return (
          <UserItem
            key={ele.id}
            name={ele.name}
            email={ele.email}
            number={ele.number}
            img={ele.img}
          ></UserItem>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.eventHandler}>
          show user
        </button>
        <div className="row pb-5 pt-4">{this.member}</div>
      </div>
    );
  }
}
export default User;
