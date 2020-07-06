import React, { useEffect } from "react";
import Search from "./calculator-search";
import FoodList from "./calculator-foodlist";
import Cart from "./calculator-cart";
import axios from 'axios';
import calImg from './cal_culator.jpg'
import "./Calculator.css";

const Calculator = ({ setCurrentPageIndex }) => {
  const [searchResult, setSearchResult] = React.useState({
    calcium: 0,
    calories: 0,
    carbohydrates: 0,
    cholesterol: 0,
    createdAt: "",
    fat: 0,
    food_name: "CAL-CULATOR",
    id: 0,
    image: calImg,
    iron: 0,
    protein: 0,
    sodium: 0,
    sugar: 0,
    updatedAt: "",
    vitamin_A: 0,
    vitamin_D: 0,
    zinc: 0
  });
  const [searchInput, setSearchInput] = React.useState({});
  const [startDate, setStartDate] = React.useState();
  const [resultSave, setResultSave] = React.useState([]);
  const [confirmData, setConfirmData] = React.useState([]);
  const [checked, setChecked] = React.useState({ 0: false });
  const [value, setValue] = React.useState({});
  const [totalCalories, setTotalCalories] = React.useState(0);

  const searchInputHandle = (e) => {
    setSearchInput({
      food_name: e
    });
  };

  const searchResultHandle = (e) => {
    setSearchResult(e);
  };

  const addDateHandle = (e) => {
    setStartDate(e);
  };

  const addToCartButton = () => {
    setResultSave((prevState) => [
      ...prevState,
      {
        id: searchResult.id,
        date: startDate,
        foodname: searchResult.food_name,
        calories: searchResult.calories,
      },
    ]);
  };

  const confirmButtonHandle = () => {
    for (let key in checked) {
      if (checked[key]) {
        setConfirmData((prevData) => [
          ...prevData,
          {
            FoodId: resultSave[key].id,
            date: resultSave[key].date,
            amount: value[key][0]
          }],
        );
      }
    }
  };

  const userFoodSender = () => {
    console.log(confirmData)
    axios.post('http://localhost:4000/food/addfooduser', {food_info:confirmData}, {withCredentials: true})
      .then(response => {
        if(response.data === 'success'){
          console.log('좋아')
        }
      })
  }

  useEffect(() => {
    userFoodSender()
  },[confirmData])

  const deleteButtonHandle = () => {
    for (let key in checked) {
      if (checked[key]) {
        console.log(key);
        setResultSave(resultSave.filter((ele, idx) => idx !== key));
        setChecked({ [key]: false });
      }
    }
  };

  useEffect(() => {
    setCurrentPageIndex(3);
  }, []);

  useEffect(() => {
    totalCaloriesHandle();
  }, [value]);

  const totalCaloriesHandle = () => {
    for (let key in value) {
      setTotalCalories(
        resultSave[key].calories * value[key][0] + totalCalories
      );
    }
  };

  return (
    <div className='calculator'>
      <div>
        <Search
          searchInputHandle={searchInputHandle}
          searchResultHandle={searchResultHandle}
          searchInput={searchInput}
        />
      </div>
      <div className='food-cart'>
        <div className='food'>
          <FoodList
            searchResult={searchResult}
            addDateHandle={addDateHandle}
            addToCartButton={addToCartButton}
          />
        </div>
        <div className='cart'>
          <Cart
            searchResult={searchResult}
            startDate={startDate}
            resultSave={resultSave}
            confirmButtonHandle={confirmButtonHandle}
            deleteButtonHandle={deleteButtonHandle}
            checked={checked}
            setChecked={setChecked}
            value={value}
            setValue={setValue}
            totalCalories={totalCalories}
            userFoodSender={userFoodSender}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
