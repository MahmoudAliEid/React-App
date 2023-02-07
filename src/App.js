import React, { Component } from "react";
import "./App.css";
// import Title from "./components/Title";
// import Social from "./components/Social";
// import Text from "./components/Text";
import User from "./components/User";
import Nav from "./components/Nav";
// import Btn from "./components/BtnTest";
class App extends Component {
  render() {
    //here i use the Todos Component
    return (
      <div className="container">
        <Nav></Nav>

        <User></User>
      </div>
    );
  }
}

export default App;
