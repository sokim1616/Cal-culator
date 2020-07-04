import React from "react";
import Search from "./calculator-search";
import FoodList from "./calculator-foodlist";
import Cart from "./calculator-cart";

const Calculator = () => {
  const [searchResult, setSearchResult] = React.useState({
    "id": 1,
    "food_name": "pizza",
    "image": "https://spoonacular.com/recipeImages/210327-312x231.jpg",
    "calories": 363.65,
    "fat": 13.08,
    "carbohydrates": 51.83,
    "sugar": 2.38,
    "protein": 9.71,
    "sodium": 14.76,
    "cholesterol": 5.04,
    "iron": 3.17,
    "calcium": 69.59,
    "vitamin_A": 359.53,
    "vitamin_D": 0,
    "zinc": 0.71,
    "createdAt": "2020-07-03T02:20:17.000Z",
    "updatedAt": "2020-07-03T02:20:17.000Z"
  });
  const [searchInput, setSearchInput] = React.useState();
  const [startDate, setStartDate] = React.useState();
  const [resultSave, setResultSave] = React.useState([]);

  const searchInputHandle = (e) => {
    setSearchInput(e);
  };

  const searchResultHandle = (e) => {
    setSearchResult(e);
  };

  const addDateHandle = (e) => {
    setStartDate(e)
  }

  const addToCartButton = () => {
    setResultSave((prevState) => [
      ...prevState,
      {
        id: searchResult.id,
        date: startDate,
        foodname: searchResult.food_name,
        calories: searchResult.calories
      }
    ])
  }

  return (
    <div>
      <div>
        <Search
          searchInputHandle={searchInputHandle}
          searchResultHandle={searchResultHandle}
          searchInput={searchInput}
        />
      </div>
      <div className="food">
        <FoodList
          searchResult={searchResult}
          addDateHandle={addDateHandle}
          addToCartButton={addToCartButton} />
      </div>
      <div className="cart">
        <Cart
          searchResult={searchResult}
          startDate={startDate}
          resultSave={resultSave}
          setResultSave={setResultSave} />
      </div>
    </div>
  );
};

export default Calculator;
