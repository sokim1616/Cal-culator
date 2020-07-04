import React from "react";
import { DataTableRow, DataTableCell } from "@rmwc/data-table";
import "@rmwc/data-table/styles";

const TableRow = ({ foodData }) => {
  const { food_name, amount, calories } = foodData;
  return (
    <DataTableRow>
      <DataTableCell>{food_name}</DataTableCell>
      <DataTableCell alignEnd>{amount}</DataTableCell>
      <DataTableCell alignEnd>{calories * amount}</DataTableCell>
    </DataTableRow>
  );
};

export default TableRow;
