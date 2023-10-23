import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Recipes = ({ addedIngredients }) => {
  const concatenatedString = addedIngredients.join("+").replace(/ /g, "+");
  const [conString, setConString] = useState(null);

  const [page, setPage] = useState(0);

  const baseURL = `https://api.edamam.com/search?q=${conString}&app_id=0c050651&app_key=de5cacc303846b5479ddc98546b27e05&from=${page}&to=${
    page + 12
  }`;

  const [recipeList, setRecipeList] = useState(null);

  const search = () => {
    setConString(concatenatedString);
  };

  const nextpage = () => {
    setPage(page + 12);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const prevpage = () => {
    if (page > 0) {
      setPage(page - 12);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (conString) {
      axios
        .get(baseURL)
        .then((response) => {
          setRecipeList(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [baseURL]);
  if (recipeList && recipeList.hits == 0) {
    return (
      <div style={{ marginLeft: "30%", marginTop: "-40px" }}>
        <button onClick={search} className="recipeBtn">
          Search
        </button>
        <h1 style={{ marginTop: "50%" }}>No results found</h1>
      </div>
    );
  }
  return (
    <div className="recipes">
      <button onClick={search} className="recipeBtn">
        Search
      </button>
      {recipeList && (
        <div className="recipe-card-grid">
          {recipeList.hits.map((hit) => {
            const recipe = hit.recipe;
            const code = recipe.uri.substring(
              recipe.uri.indexOf("#recipe_") + "#recipe_".length
            );

            return (
              <div key={recipe.uri} className="recipe-link">
                <Link to={`recipes/${code}`}>
                  <div className="recipe-card">
                    <h2 className="recipe-title">{recipe.label}</h2>
                    <img
                      src={recipe.image}
                      alt={recipe.label}
                      className="recipe-image"
                    />
                    <p className="recipe-source">Source: {recipe.source}</p>
                    <p>
                      Cuisine:{" "}
                      {recipe.cuisineType[0].charAt(0).toUpperCase() +
                        recipe.cuisineType[0].slice(1)}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {recipeList && (
        <div style={{ marginTop: "90px" }}>
          <button
            disabled={page === 0}
            onClick={prevpage}
            className="recipeBtn"
          >
            Previous page
          </button>
          <button onClick={nextpage} className="recipeBtn">
            Next page
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipes;
