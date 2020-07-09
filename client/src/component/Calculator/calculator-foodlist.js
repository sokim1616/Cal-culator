import React from "react";
import AddFoodList from "./calculator-add-foodlist";
import "./Calculator.scss";

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
import '@rmwc/snackbar/styles';
import { Snackbar, SnackbarAction } from "@rmwc/snackbar";

const FoodImage = ({ searchResult, addDateHandle, addToCartButton, openError, setOpenError }) => {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState();

  const addToCartHandle = () => {
    setOpen(true);
  };
  // {searchResult.food_name.toUpperCase()}
  return (
    <div>
      <div className='food__foodName'>
        <Typography style={{fontWeight: '200'}} use='headline3'>{searchResult.food_name.toUpperCase()}</Typography>
      </div>
      <div className='food__foodImage'>
        <img
          src={`${searchResult.image}`}
          alt={searchResult.food_name}
          height='300'
          width='375'
        />
      </div>
      <div className='food__dataTable'>
        <DataTable style={{ height: "300px", width: "300px" }}>
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
      <div className='food__datePicker'>
        <TextField
          style={{height: '55px',borderRadius: "4px",  backgroundColor: '#27ac27'}}
          selected={startDate}
          onChange={(e) => addDateHandle(e.target.value)}
          label='date'
          type='date'
        />
      </div>
      <div className='food__addButton'>
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
          style={{ height: "55px", width: '10rem' }}
          onClick={addToCartHandle}
          raised
        >
          ADD TO CART
          </Button>
      </div>
      <div>
        <Snackbar
          open={openError}
          onClose={evt => setOpenError(false)}
          message="Please search food or select date..."
          dismissesOnAction
          action={
            <SnackbarAction
              style={{ color: "#ffff" }}
              label="Dismiss"
              onClick={() => console.log('Click Me')}
            />
          }
        />
      </div>
    </div>
  );
};

export default FoodImage;
