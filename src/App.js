import React, { Component } from "react";
import Palindrome from "./pages/palindrome";
import Denomination from "./pages/denomination";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
          id="main-nav"
        >
          <div className="container">
            <a href="index.html" className="navbar-brand">
              Palindromes & Denomination
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#home-section" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#result-section" className="nav-link">
                    Result
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          style={{ background: "#0e1111", height: "100vh" }}
          id="home-section"
        >
          <h1
            className="text-center"
            style={{ color: "white", paddingTop: "100px" }}
          >
            WELCOME
          </h1>
          <div
            className="container my-4"
            style={{ color: "white", fontFamily: "sans-serif" }}
          >
            <p>
              There is 2 cards that you can see below. One is for palindrome
              checker, and the other one is for denomination.
            </p>
            <li>
              A palindrome is a word, phrase, number or sequence of words that
              reads the same backward as forward. Punctuation and spaces between
              the words or lettering is allowed. <br />
              Rules :<ul>Cannot use regex</ul>
              <ul>Cannot use reverse method</ul>
            </li>
            <li>
              Denomination is looking for the smallest number that can be
              obtained and put it in a group. Denomination also is a proper
              description of a currency amount. So, here we will try to find a
              right and proper description of a currency amount that user
              inputs.
              <br />
              <ul>Use react hooks</ul>
              <ul>
                Nominal amount : 100000, 50000, 20000, 10000, 5000, 2000, 1000,
                500, 200, 100
              </ul>
              <ul>Type input must be text</ul>
              <ul>Minimal input is 99</ul>
              <ul>Max input is 10000000000</ul>
            </li>
          </div>
        </div>
        <div style={{ height: "100vh" }}>
          <section id="result-section">
            <div className="text-center my-5">
              <h1>Result</h1>
            </div>
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
          </section>
        </div>
      </div>
    );
  }
}
