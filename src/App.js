import React, { Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import "./App.css";

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

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  componentDidMount = () => {
    const data = localStorage.getItem("recipes");
    const recipes = JSON.parse(data);
    this.setState({ recipes: recipes });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">Search Recipe</header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}
