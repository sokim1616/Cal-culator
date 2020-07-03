import React from "react";
import { DataTableRow, DataTableCell, DataTableBody } from "@rmwc/data-table";
import "@rmwc/data-table/styles";
import { Checkbox } from "@rmwc/checkbox";
import "@rmwc/checkbox";

const Confirm = () => {
  const [checked, setChecked] = React.useState({});
  const sampleRows = new Array(1).fill(undefined);

  return (
    
      <DataTableBody>
        {sampleRows.map((v, i) => (
          <DataTableRow key={i} selected={checked[i]}>
            <DataTableCell hasFormControl>
              <Checkbox
                checked={checked[i]}
                onChange={(evt) => {
                  checked[i] = evt.currentTarget.checked;
                  setChecked({ ...checked });
                }}
              />
            </DataTableCell>
            <DataTableCell>Apple</DataTableCell>
            <DataTableCell>1000</DataTableCell>
            <DataTableCell>1000</DataTableCell>
          </DataTableRow>
        ))}
      </DataTableBody>
    
  );
};

export default Confirm;
