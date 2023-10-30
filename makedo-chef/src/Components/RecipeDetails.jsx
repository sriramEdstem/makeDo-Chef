import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css";

function RecipeDetails() {
  const params = useParams();
  const recipeId = params.recipeId;
  console.log(recipeId);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const baseURL = `https://api.edamam.com/search?q=${recipeId}&app_id=0c050651&app_key=de5cacc303846b5479ddc98546b27e05&from=0&to=10`;
  const navigate = useNavigate(); //

  const returnToRecipes = () => {
    navigate(-1);
  };
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setRecipeDetails(response.data);
        console.log(response.data.hits[0].recipe.label);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [setRecipeDetails]);

  return (
    <>
      <div
        style={{
          display: "flex",
          marginLeft: "30px",
          marginBottom: "150px",
          marginTop: "-100px",
        }}
      >
        <button onClick={returnToRecipes} style={{ padding: "15px 20px" }}>
          Return to recipes list
        </button>
      </div>
      <div className="recipedetails">
        {recipeDetails &&
          recipeDetails.hits.map((hit) => {
            const recipe = hit.recipe;
            return (
              <div key={recipe.uri} className="recipe">
                <div>
                  <h2>{recipe.label}</h2>
                  <img src={recipe.image} alt={recipe.label} />
                  <p>
                    Cuisine:{" "}
                    {recipe.cuisineType[0].charAt(0).toUpperCase() +
                      recipe.cuisineType[0].slice(1)}
                  </p>
                  <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>For full recipe: {recipe.source}</p>
                  </a>
                  <p className="recipe-cuisine">
                    Cuisine:{" "}
                    {recipe.cuisineType[0].charAt(0).toUpperCase() +
                      recipe.cuisineType[0].slice(1)}
                  </p>
                  <p className="recipe-diet-labels">
                    Diet Labels:{" "}
                    {recipe.dietLabels.map((label) => (
                      <span key={label} className="label2">
                        {label}
                      </span>
                    ))}
                  </p>
                  <p className="recipe-health-labels">
                    Health Labels:{" "}
                    {recipe.healthLabels.map((label) => (
                      <span key={label} className="label">
                        {label}
                      </span>
                    ))}
                  </p>
                  <p className="recipe-cautions">
                    Cautions:{" "}
                    {recipe.cautions.map((caution) => (
                      <span key={caution} className="label1">
                        {caution}
                      </span>
                    ))}
                  </p>
                  <h3 className="recipe-ingredients-title">Ingredients:</h3>
                  <ul className="recipe-ingredients-list">
                    {recipe.ingredientLines.map((ingredient, index) => (
                      <li key={index} className="recipe-ingredient">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default RecipeDetails;
