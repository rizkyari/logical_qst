import React, { Component } from "react";
import Palindrome from "./pages/palindrome";
import Denomination from "./pages/denomination";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col m-3">
          <div className="card">
            <Palindrome />
          </div>
        </div>
        <div className="col m-3">
          <div className="card">
            <Denomination />
          </div>
        </div>
      </div>
    );
  }
}
