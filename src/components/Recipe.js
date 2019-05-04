import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_KEY = "4678a2d7b2b2fca31d3eb917358ad0d8";

export default class Recipe extends Component {
  state = {
    ActiveRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;

    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

    const resopnse = await req.json();

    this.setState({ ActiveRecipe: resopnse.recipes[0] });
    console.log(this.state.ActiveRecipe);
  };
  render() {
    const { image_url, publisher, publisher_url, title } = this.state.ActiveRecipe;
    return (
      <div className="container">
        <div className="active-resipe">
          <img className="active-recipe__img" src={image_url} alt={title} />
          <h3 className="active-resipe__title">{title}</h3>
          <h4 className="active-resipe__publisher">
            Publisher:
            <span>{publisher}</span>
          </h4>
          <p className="active-recipe__website">
            Website:
            <span>
              <a href={publisher_url}>{publisher_url}</a>
            </span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    );
  }
}
