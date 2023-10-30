import Header from "./Components/Header";
import RecipeDetails from "./Components/RecipeDetails";
import Recipes from "./Components/Recipes";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}>
        <Route path=":recipeID" element={<Recipes />} />
      </Route>
      <Route path="recipes" element={<Header />}>
        <Route index element={<Recipes />} />
        <Route path=":recipeId" element={<RecipeDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
