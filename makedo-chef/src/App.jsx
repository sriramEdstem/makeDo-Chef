import Header from "./components/Header";
import RecipeDetails from "./components/RecipeDetails";
import Recipes from "./components/Recipes";
import Homepage from "./pages/Homepage";
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
