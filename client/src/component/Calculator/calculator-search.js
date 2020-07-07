import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataTableRow, DataTableCell } from "@rmwc/data-table";
import "@rmwc/data-table/styles";
import "@rmwc/textfield/styles";
import "@rmwc/button/styles";
import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import "./Calculator.css";

const Search = ({
  inputRef,
  searchInputHandle,
  searchResultHandle,
  searchInput,
  autoComplete,
  setSearchInput,
  setAutoComplete,
}) => {
  const clickSearch = (value) => {
    axios
      .post(
        "http://localhost:4000/food/foodinfo/",
        { food_name: value },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        searchResultHandle(response.data);
        setSearchInput({});
        setAutoComplete([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:4000/food/foodinfo/", searchInput, {
              withCredentials: true,
            })
            .then((response) => {
              searchResultHandle(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <div className='search'>
          <div className='search-input'>
            <TextField
              ref={inputRef}
              onChange={(e) => searchInputHandle(e.target.value)}
              style={{ width: "30rem" }}
              outlined
              placeholder='What did you eat today...?'
            />
            <div className='test'>
              {autoComplete.map((item, idx) => (
                <div
                  onClick={(e) => clickSearch(e.target.textContent)}
                  key={idx}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <div className='search-button'>
            <Button
              type='submit'
              style={{ height: "3.5rem" }}
              label='Search'
              outlined
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
