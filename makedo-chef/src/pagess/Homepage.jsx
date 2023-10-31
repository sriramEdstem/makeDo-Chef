import AutoComplete from "../Components/AutoComplete ";
import { autoCompleteData } from "../data.js";
import { useState } from "react";
import CheckList from "../Components/CheckList";
import Recipes from "../Components/Recipes";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [listItem, setListItem] = useState(null);
  const [addedIngredients, setAddedIngredients] = useState([]);
  const concatenatedString = addedIngredients.join("+").replace(/ /g, "+");

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
        <Link to={`/${concatenatedString}`}>
          <button className="searchR">Search</button>
        </Link>
        {/* <Recipes
          className="recipelists"
          addedIngredients={addedIngredients}
          conString={conString}
          setConString={setConString}
        ></Recipes> */}
      </div>
    </div>
  );
};

export default Homepage;
