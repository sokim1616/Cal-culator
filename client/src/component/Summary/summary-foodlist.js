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
    <div>
      <div>
        <DataTable style={{ height: "300px", width: "375px" }}>
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
                    food_name: item.food_name,
                    amount: item.amount,
                    calories: item.calories,
                  }}
                />
              ))}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
      <div>
        <TextField
          selected={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          label='date'
          type='date'
        />
      </div>
      <div>
        <TextField
          selected={startWeek}
          onChange={(e) => setStartWeek(e.target.value)}
          label='week'
          type='week'
        />
      </div>
      <div>
        <TextField
          selected={startMonth}
          onChange={(e) => setStartMonth(e.target.value)}
          label='month'
          type='month'
        />
      </div>
    </div>
  );
};

export default FoodList;
