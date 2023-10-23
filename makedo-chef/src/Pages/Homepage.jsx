import AutoComplete from "../Components/AutoComplete ";
import { autoCompleteData } from "../data.js";
import { useState } from "react";
import CheckList from "../Components/CheckList";
import Recipes from "../Components/Recipes";
import Header from "../Components/Header";

const Homepage = () => {
  const [listItem, setListItem] = useState(null);
  const [addedIngredients, setAddedIngredients] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <div className="side">
          <AutoComplete
            listItem={listItem}
            setListItem={setListItem}
            data={autoCompleteData}
          />
          <CheckList
            data={autoCompleteData}
            addedIngredients={addedIngredients}
            setAddedIngredients={setAddedIngredients}
            listItem={listItem}
            setListItem={setListItem}
          ></CheckList>
        </div>
        <Recipes
          className="recipelists"
          addedIngredients={addedIngredients}
        ></Recipes>
      </div>
    </div>
  );
};

export default Homepage;
