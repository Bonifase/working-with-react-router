import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";

const API_KEY = "4678a2d7b2b2fca31d3eb917358ad0d8";

export default class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&page=2`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">Search Recipe</header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map(data => {
          return (
            <div key={data.recipe_id}>
              <img src={data.image_url} alt={data.title} />
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
