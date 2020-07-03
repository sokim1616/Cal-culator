import React from "react";
import AddFoodList from "./calculator-add-foodlist";

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

const FoodImage = ({ searchResult, addDateHandle, addToCartButton }) => {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState();

  return (
    <>
      <Typography use="headline2">{searchResult.food_name}</Typography>
      <div>
        <img
          src={`${searchResult.image}`}
          alt="pasta"
          height="200"
          width="280"
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
      <div>
        <TextField
          selected={startDate}
          onChange={(e) => addDateHandle(e.target.value)}
          label="date"
          type="date"
        />
      </div>
      <div className="addtocart-button">
        <Dialog
          open={open}
          onClose={(evt) => {
            console.log(evt.detail.action);
            setOpen(false);
          }}
          onClosed={(evt) => console.log(evt.detail.action)}
        >
          <DialogTitle>ADD TO CART</DialogTitle>
          <DialogContent>Did you really eat this...?</DialogContent>
          <DialogActions>
            <DialogButton action="close">Cancel</DialogButton>
            <DialogButton
              onClick={addToCartButton}
              action="accept"
              isDefaultAction
            >
              Of Course!!
            </DialogButton>
          </DialogActions>
        </Dialog>

        <Button raised onClick={() => setOpen(true)}>
          ADD TO CART
        </Button>
      </div>
    </>
  );
};

export default FoodImage;
