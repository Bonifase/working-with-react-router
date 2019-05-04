import React, { Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import "./App.css";
import Calculator from "./components/Calculator";

const API_KEY = "4678a2d7b2b2fca31d3eb917358ad0d8";

export default class App extends Component {
  state = {
    recipes: [],
    error: {}
  };

  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&limit=10`);

    const data = await api_call.json();

    if (data.error === true) {
      this.setState({ error: data.error });
    } else {
      this.setState({ recipes: data.recipes });
    }
  };

  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);

  //   var current, screen, output, limit, zero, period, operator;

  //   screen = document.getElementById("result");

  //   var elem = document.querySelectorAll(".num");

  //   var len = elem.length;

  //   for (var i = 0; i < len; i++) {
  //     elem[i].addEventListener(
  //       "click",
  //       function() {
  //         var number = this.value;

  //         output = screen.innerHTML += number;

  //         limit = output.length;

  //         if (limit > 16) {
  //           alert("Sorry no more input is allowed");
  //         }
  //       },
  //       false
  //     );
  //   }

  //   document.querySelector(".zero").addEventListener(
  //     "click",
  //     function() {
  //       zero = this.value;

  //       if (screen.innerHTML === "") {
  //         output = screen.innerHTML = zero;
  //       } else if (screen.innerHTML === output) {
  //         output = screen.innerHTML += zero;
  //       }
  //     },
  //     false
  //   );

  //   document.querySelector(".period").addEventListener(
  //     "click",
  //     function() {
  //       period = this.value;

  //       if (screen.innerHTML === "") {
  //         output = screen.innerHTML = screen.innerHTML.concat("0.");
  //       } else if (screen.innerHTML === output) {
  //         screen.innerHTML = screen.innerHTML.concat(".");
  //       }
  //     },
  //     false
  //   );

  //   document.querySelector("#eqn-bg").addEventListener(
  //     "click",
  //     function() {
  //       if (screen.innerHTML === output) {
  //         screen.innerHTML = eval(output);

  //         output = screen.innerHTML;
  //       } else {
  //         screen.innerHTML = "";
  //       }
  //     },
  //     false
  //   );

  //   document.querySelector("#delete").addEventListener(
  //     "click",
  //     function() {
  //       screen.innerHTML = "";
  //     },
  //     false
  //   );

  //   var elem1 = document.querySelectorAll(".operator");

  //   var len1 = elem1.length;

  //   for (var j = 0; j < len1; j++) {
  //     elem1[i].addEventListener(
  //       "click",
  //       function() {
  //         operator = this.value;

  //         if (screen.innerHTML === "") {
  //           screen.innerHTML = screen.innerHTML.concat("");
  //         } else if (output) {
  //           screen.innerHTML = output.concat(operator);
  //         }
  //       },
  //       false
  //     );
  //   }
  // };

  // componentDidMount = () => {
  //   const data = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(data);
  //   this.setState({ recipes: recipes });
  // };
  openCalulator = () => {
    var x = document.getElementById("calculator");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Search Recipe</h1>

          <button className="calculator-button" onClick={this.openCalulator}>
            Calculator
          </button>
          <Calculator />
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}
