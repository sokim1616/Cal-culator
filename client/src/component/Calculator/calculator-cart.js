import React from "react";
import AddCart from "./calculator-add-cart";
import "./Calculator.scss";

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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from "@rmwc/dialog";
import "@rmwc/dialog/styles";
import { Typography } from "@rmwc/typography";
import "@rmwc/typography/styles";
// import stcp from "styled-components"

const Cart = ({
  searchResult,
  startDate,
  resultSave,
  setResultSave,
  confirmButtonHandle,
  deleteButtonHandle,
  checked,
  setChecked,
  value,
  setValue,
  totalCalories
}) => {
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const checkedHandle = () => {
    setChecked({ ...checked });
  };

  const amountHandle = (i, ...arg) => {
    setValue({
      ...value,
      [i]: arg,
    });
  };

  const confirmButton = () => {
    confirmButtonHandle();
  }

  // const TabStyle = stcp(Tab)`border: 1px solid black`;

  return (
    <div>
      <div className='cart__title'>
        <Typography style={{fontWeight: '200'}} use='headline3'>CART</Typography>
      </div>
      <div className="cart__foodlist">
        <DataTable
          style={{ height: "380px", width: "600px" }}
        >
          <DataTableContent>
            <DataTableHead>
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
                checked={checked}
                checkedHandle={checkedHandle}
                searchResult={searchResult}
                startDate={startDate}
                resultSave={resultSave}
                amountHandle={amountHandle}
                value={value}
                setValue={setValue}
              />
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div className="cart__totalCalorie">
        <SimpleDataTable style={{ height: '55px' }} data={[["Total Calorie", `${totalCalories.toFixed(2)}`]]} />
      </div>

      <div className="cart__deleteButton">
        <Dialog
          open={deleteOpen}
          onClose={(evt) => {
            console.log(evt.detail.action);
            setDeleteOpen(false);
          }}
          onClosed={(evt) => console.log(evt.detail.action)}
        >
          <DialogTitle>Delete</DialogTitle>
          <DialogContent>
            Do you really want to delete the selected item(s)...? really...?
              </DialogContent>
          <DialogActions>
            <DialogButton action="close">Cancel</DialogButton>
            <DialogButton
              onClick={deleteButtonHandle}
              action="accept"
              isDefaultAction
            >
              Delete
                </DialogButton>
          </DialogActions>
        </Dialog>

        <Button className='cart-delete-button' style={{ height: "55px", width: '10rem' }} danger raised onClick={() => setDeleteOpen(true)}>
          DELETE
            </Button>
      </div>
      <div className="cart__confirmButton">
        <Dialog
          open={confirmOpen}
          onClose={(evt) => {
            console.log(evt.detail.action);
            setConfirmOpen(false);
          }}
          onClosed={(evt) => console.log(evt.detail.action)}
        >
          <DialogTitle>Confirm</DialogTitle>
          <DialogContent>
            Do you really want to confirm the selected item(s)...?
            really...?
              </DialogContent>
          <DialogActions>
            <DialogButton action="close">Cancel</DialogButton>
            <DialogButton
              onClick={confirmButton}
              action="accept"
              isDefaultAction
            >
              Confirm
                </DialogButton>
          </DialogActions>
        </Dialog>
        <Button className='cart-confirm-button' style={{ height: "55px", width: '10rem' }} raised onClick={() => setConfirmOpen(true)}>
          CONFIRM
            </Button>
      </div>
    </div>
  );
};

export default Cart;
