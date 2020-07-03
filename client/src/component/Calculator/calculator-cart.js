import React from "react";
import AddCart from './calculator-add-cart'

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
import { SimpleDialog } from "@rmwc/dialog";
import "@rmwc/dialog/styles";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import { TextField } from "@rmwc/textfield";
import "@rmwc/textfield/styles";
// import stcp from "styled-components"

const Cart = ({searchResult, startDate, resultSave}) => {
  
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  // const DataTable = stcp(DataTableHead)`border: 1px solid black`;

  return (
    <div>
      <div>
        <DataTable className="cart-table" style={{width:"800px"}}>
          <DataTableContent>
            <DataTableHead >
              <DataTableRow>
                <DataTableHeadCell hasFormControl></DataTableHeadCell>
                <DataTableHeadCell>Date</DataTableHeadCell>
                <DataTableHeadCell>Food Name</DataTableHeadCell>
                <DataTableHeadCell>Amout (per serving)</DataTableHeadCell>
                <DataTableHeadCell>Calorie (cal)</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
        <AddCart 
          searchResult={searchResult}
          startDate={startDate}
          resultSave={resultSave} />
      </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div className="total-calorie">
        <SimpleDataTable data={[["Total Calorie", "3000 kcal"]]} />
      </div>
      <div className="cart-button">
        <span>
          <SimpleDialog
            title="DELETE"
            body="레알 지울까요?"
            open={deleteOpen}
            onClose={(evt) => {
              console.log(evt.detail.action);
              setDeleteOpen(false);
            }}
          />
          <Button raised onClick={() => setDeleteOpen(true)}>
            DELETE
          </Button>
        </span>
        <span>
          <SimpleDialog
            title="CONFIRM"
            body="등록?"
            open={confirmOpen}
            onClose={(evt) => {
              console.log(evt.detail.action);
              setConfirmOpen(false);
            }}
          />
          <Button raised onClick={() => setConfirmOpen(true)}>
            CONFIRM
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
