import React, { Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import "./App.css";
import Calculator from "./components/Calculator";
import Message from "./components/Message";

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

    if (data.error === "limit") {
      this.setState({ error: data.error });
      console.log(data.error);
    } else {
      this.setState({ recipes: data.recipes });
    }
  };

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
        {this.state.error.isEmpty === false ? <Message /> : <Recipes recipes={this.state.recipes} />}
      </div>
    );
  }
}
