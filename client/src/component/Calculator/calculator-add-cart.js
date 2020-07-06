import React from "react";
// import Checkbox from "./calculator-checkbox-add-cart"

import "@rmwc/data-table/styles";
import {
  SimpleDataTable,
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from "@rmwc/data-table";
import "@rmwc/checkbox/styles";
import { Checkbox } from "@rmwc/checkbox";
import "@rmwc/select/styles";
import { Select } from "@rmwc/select";

const AddCart = ({ resultSave, checked, checkedHandle, amountHandle, value }) => {

  return (
    <React.Fragment>
      {resultSave.map((v, i) => (
        <DataTableRow key={i} selected={checked[i]}>
          <DataTableCell hasFormControl>
          <Checkbox
          checked={checked[i]}
          onChange={(evt) => {
            checked[i] = evt.currentTarget.checked;
            checkedHandle();
          }}
        />
      </DataTableCell>
      <DataTableCell>{v.date}</DataTableCell>
      <DataTableCell>{v.foodname}</DataTableCell>
      <DataTableCell>
        <Select
          placeholder="--Select--"
          options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
          value={value[i[0]]}
          onChange={(evt) => amountHandle(i, evt.currentTarget.value)}
        />
          </DataTableCell>
          <DataTableCell>{((value[i]) * v.calories).toFixed(2)}</DataTableCell>
        </DataTableRow>
      ))}
    </React.Fragment>
  );
};

export default AddCart;
