import React from "react";
import AddFoodList from "./calculator-add-foodlist";
import "./Calculator.css";

import "@rmwc/data-table/styles";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
} from "@rmwc/data-table";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from "@rmwc/dialog";
import "@rmwc/dialog/styles";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import { TextField } from "@rmwc/textfield";
import "@rmwc/textfield/styles";
import { Typography } from "@rmwc/typography";
import "@rmwc/typography/styles";
import { Tab, TabBar } from "@rmwc/tabs";
import "@rmwc/tabs/styles";
import "@rmwc/snackbar/styles";
import { Snackbar, SnackbarAction } from "@rmwc/snackbar";

const FoodImage = ({
  searchResult,
  addToCartButton,
  startDate,
  setStartDate,
  openError,
  setOpenError,
}) => {
  const [open, setOpen] = React.useState(false);

  const addToCartHandle = () => {
    setOpen(true);
  };

  return (
    <>
      <Tab style={{ fontSize: "50px" }}>{searchResult.food_name}</Tab>
      <div>
        <img
          className='food--image'
          src={`${searchResult.image}`}
          alt={searchResult.food_name}
          height='300'
          width='375'
        />
      </div>
      <div>
        <DataTable style={{ height: "300px", width: "375px" }}>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell>Item</DataTableHeadCell>
                <DataTableHeadCell>Amout (per serving)</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              <AddFoodList searchResult={searchResult} />
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div className='food--addtocart'>
        <div>
          <TextField
            selected={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            label='date'
            type='date'
          />
        </div>
        <div className='addtocart-button'>
          <Dialog
            open={open}
            onClose={(evt) => {
              setOpen(false);
            }}
            // onClosed={(evt) => console.log(evt.detail.action)}
          >
            <DialogTitle>ADD TO CART</DialogTitle>
            <DialogContent>Did you really eat this...?</DialogContent>
            <DialogActions>
              <DialogButton action='close'>Cancel</DialogButton>
              <DialogButton
                onClick={addToCartButton}
                action='accept'
                isDefaultAction
              >
                Of Course!!
              </DialogButton>
            </DialogActions>
          </Dialog>
          <Button
            className='add--to--cart--button'
            style={{ height: "55px" }}
            onClick={addToCartHandle}
            raised
          >
            ADD TO CART
          </Button>
          <Snackbar
            open={openError}
            onClose={(evt) => setOpenError(false)}
            message='Please search food or select date...'
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
    </>
  );
};

export default FoodImage;
