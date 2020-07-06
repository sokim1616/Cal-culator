import React from "react";
import axios from "axios";

import "@rmwc/textfield/styles";
import "@rmwc/button/styles";
import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import "./Calculator.css";

const Search = ({ searchInputHandle, searchResultHandle, searchInput }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(searchInput);
          axios
            .post("http://localhost:4000/foodinfo/", searchInput, {
              withCredentials: true,
            })
            .then((response) => {
              searchResultHandle(response);
            });
        }}
      >
        <div className="search">
          <center>
            <span className="search-input">
              <TextField
                onChange={(e) => searchInputHandle(e.target.value)}
                style={{ width: "30rem" }}
                outlined
                placeholder="What did you eat today...?"
              />
            </span>
            <span className="search-button">
              <Button
                type="submit"
                style={{ height: "3.5rem" }}
                label="Search"
                outlined
              />
            </span>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Search;
