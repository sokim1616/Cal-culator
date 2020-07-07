import React, { useEffect, useRef } from "react";
import Search from "./calculator-search";
import FoodList from "./calculator-foodlist";
import Cart from "./calculator-cart";
import axios from "axios";
import calImg from "./cal_culator.jpg";
import "./Calculator.css";

import { Snackbar, SnackbarAction } from "@rmwc/snackbar";
import "@rmwc/snackbar/styles";

const Calculator = ({ setCurrentPageIndex }) => {
  const inputRef = useRef();
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
    zinc: 0,
  });
  const [searchInput, setSearchInput] = React.useState({});
  const [startDate, setStartDate] = React.useState();
  const [resultSave, setResultSave] = React.useState([]);
  const [confirmData, setConfirmData] = React.useState([]);
  const [checked, setChecked] = React.useState({});
  const [value, setValue] = React.useState({});
  const [totalCalories, setTotalCalories] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [autoComplete, setAutoComplete] = React.useState([]);

  const searchInputHandle = (e) => {
    setSearchInput({
      food_name: e,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current.children[1].value == searchInput.food_name) {
        axios
          .get("http://localhost:4000/food/foodautocomplete", {
            params: {
              query: searchInput.food_name,
            },
          })
          .then((result) => {
            setAutoComplete(result.data);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, inputRef]);

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
    setChecked((prevState) => {
      let count = Object.keys(checked).length;
      return {
        ...prevState,
        [count]: false,
      };
    });
  };

  const confirmButtonHandle = () => {
    for (let key in checked) {
      if (checked[key]) {
        setConfirmData((prevData) => [
          ...prevData,
          {
            FoodId: resultSave[key].id,
            date: resultSave[key].date,
            amount: value[key][0],
          },
        ]);
      }
    }
  };

  const userFoodSender = () => {
    axios
      .post(
        "http://localhost:4000/food/addfooduser",
        { food_info: confirmData },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data === "success") {
          setOpen(!open);
        }
      });
  };

  useEffect(() => {
    userFoodSender();
    setResultSave((prevState) => {
      return prevState.filter((item, idx) => {
        return !checked[idx];
      });
    });
    setChecked((prevState) => {
      let checkedKeys = Object.keys(prevState);
      let count = checkedKeys.filter((item) => {
        return prevState[item] === false;
      }).length;
      let returnObj = {};
      for (let i = 0; i < count; i++) {
        returnObj[i] = false;
      }
      return returnObj;
    });
  }, [confirmData]);

  const deleteButtonHandle = () => {
    setResultSave((prevState) => {
      return prevState.filter((item, idx) => {
        return checked[idx] === false;
      });
    });

    setChecked((prevState) => {
      let checkedKeys = Object.keys(prevState);
      let count = checkedKeys.filter((item) => {
        return prevState[item] === false;
      }).length;
      let returnObj = {};
      for (let i = 0; i < count; i++) {
        returnObj[i] = false;
      }
      return returnObj;
    });
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
          inputRef={inputRef}
          autoComplete={autoComplete}
          setSearchResult={setSearchResult}
          setSearchInput={setSearchInput}
          setAutoComplete={setAutoComplete}
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
        <div>
          <Snackbar
            open={open}
            onClose={(evt) => setOpen(false)}
            message='Successfully registerd...'
            dismissesOnAction
            action={
              <SnackbarAction
                style={{ color: "#ffff" }}
                label='Dismiss'
                onClick={() => console.log("Click Me")}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
