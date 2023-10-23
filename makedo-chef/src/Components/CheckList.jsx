import React, { useState, useEffect } from "react";

const CheckList = ({
  data,
  listItem,
  addedIngredients,
  setAddedIngredients,
  setListItem,
}) => {
  useEffect(() => {
    if (
      listItem &&
      data.includes(listItem) &&
      !addedIngredients.includes(listItem)
    ) {
      setAddedIngredients([...addedIngredients, listItem]);
    }
  }, [listItem, data, addedIngredients, setAddedIngredients]);

  const removeItem = (itemToRemove) => {
    setAddedIngredients(
      addedIngredients.filter((item) => item !== itemToRemove)
    );
    setListItem(null);
  };

  return (
    <div className="checklist">
      <h2>Checklist</h2>
      <ul>
        {addedIngredients.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(item)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckList;
