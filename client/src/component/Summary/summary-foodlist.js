import React from "react";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
} from "@rmwc/data-table";
import "@rmwc/data-table/styles";
import "@rmwc/textfield/styles";
import { TextField } from "@rmwc/textfield";
import TableRow from "./TableRow";

const FoodList = ({ food }) => {
  const [sortDir, setSortDir] = React.useState(null);
  const [startDate, setStartDate] = React.useState();
  const [startWeek, setStartWeek] = React.useState();
  const [startMonth, setStartMonth] = React.useState();

  return (
    <div className="summary--foodlist">
      <div>
        <DataTable style={{ height: "500px", width: "575px" }}>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell>Food</DataTableHeadCell>
                <DataTableHeadCell
                  alignEnd
                  sort={sortDir}
                  onSortChange={(sortDir) => {
                    setSortDir(sortDir);
                    console.log(sortDir);
                  }}
                >
                  Serving(s)
                </DataTableHeadCell>
                <DataTableHeadCell alignEnd>Calories (kcal)</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              {food.map((item, idx) => (
                <TableRow
                  key={idx}
                  foodData={{
                    food_name: item.Food,
                    amount: item.Servings,
                    calories: item.Calories,
                  }}
                />
              ))}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
    </div>
  );
};

export default FoodList;
