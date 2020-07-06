import React from "react";

import "@rmwc/data-table/styles";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from "@rmwc/data-table";

const AddFoodList = ({ searchResult }) => {
  return (
    <>
      <DataTableRow>
        <DataTableCell>Calories</DataTableCell>
        <DataTableCell alignEnd>{searchResult.calories} (cal)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Fat</DataTableCell>
        <DataTableCell alignEnd>{searchResult.fat} (g)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Carbohydrates</DataTableCell>
        <DataTableCell alignEnd>{searchResult.carbohydrates} (g)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Sugar</DataTableCell>
        <DataTableCell alignEnd>{searchResult.sugar} (g)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Protein</DataTableCell>
        <DataTableCell alignEnd>{searchResult.protein} (g)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Sodium</DataTableCell>
        <DataTableCell alignEnd>{searchResult.sodium} (mg)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Cholesterol</DataTableCell>
        <DataTableCell alignEnd>{searchResult.cholesterol} (mg)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Iron</DataTableCell>
        <DataTableCell alignEnd>{searchResult.iron} (mg)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Calcium</DataTableCell>
        <DataTableCell alignEnd>{searchResult.calcium} (mg)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Vitamin_A</DataTableCell>
        <DataTableCell alignEnd>{searchResult.vitamin_A} (IU)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Vitamin_D</DataTableCell>
        <DataTableCell alignEnd>{searchResult.vitamin_D} (IU)</DataTableCell>
      </DataTableRow>
      <DataTableRow>
        <DataTableCell>Zinc</DataTableCell>
        <DataTableCell alignEnd>{searchResult.zinc} (mg)</DataTableCell>
      </DataTableRow>
    </>
  );
};

export default AddFoodList;
