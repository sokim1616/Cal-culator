import React from 'react';
import {
    DataTable,
    DataTableContent,
    DataTableHead,
    DataTableRow,
    DataTableHeadCell,
    DataTableBody,
    DataTableCell
} from '@rmwc/data-table';
import '@rmwc/data-table/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

    const FoodList = () => {
    const [sortDir, setSortDir] = React.useState(null);
    const [startDate, setStartDate] = React.useState(new Date());

    return (
      <div>
      <div>
        <DataTable 
        style={{ height: '300px', width: '375px' }}
        >
      <DataTableContent>
        <DataTableHead>
          <DataTableRow>
            <DataTableHeadCell>Food</DataTableHeadCell>
            <DataTableHeadCell
              alignEnd
              sort={sortDir}
              onSortChange={sortDir => {
                setSortDir(sortDir);
                console.log(sortDir);
              }}
            >
              Weight (g)
            </DataTableHeadCell>
            <DataTableHeadCell alignEnd>Calorie (kcal)</DataTableHeadCell>
          </DataTableRow>
        </DataTableHead>
        <DataTableBody>
          <DataTableRow>
            <DataTableCell>Cookies</DataTableCell>
            <DataTableCell alignEnd>25</DataTableCell>
            <DataTableCell alignEnd>3000</DataTableCell>
          </DataTableRow>
          <DataTableRow selected>
            <DataTableCell>Pizza</DataTableCell>
            <DataTableCell alignEnd>50</DataTableCell>
            <DataTableCell alignEnd>500</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>Icecream</DataTableCell>
            <DataTableCell alignEnd>10</DataTableCell>
            <DataTableCell alignEnd>100</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>Icecream</DataTableCell>
            <DataTableCell alignEnd>10</DataTableCell>
            <DataTableCell alignEnd>100</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>Icecream</DataTableCell>
            <DataTableCell alignEnd>10</DataTableCell>
            <DataTableCell alignEnd>100</DataTableCell>
          </DataTableRow>
          <DataTableRow>
            <DataTableCell>Icecream</DataTableCell>
            <DataTableCell alignEnd>10</DataTableCell>
            <DataTableCell alignEnd>100</DataTableCell>
          </DataTableRow>
        </DataTableBody>
      </DataTableContent>
    </DataTable>
    </div>
    <div>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
    </div>
    )
}

export default FoodList;