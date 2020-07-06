import React from "react";

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
import "@rmwc/checkbox/styles";
import { Checkbox } from "@rmwc/checkbox";
import "@rmwc/select/styles";
import { Select } from "@rmwc/select";
import '@rmwc/switch/styles'
import { Switch } from '@rmwc/switch'

const About = () => {
  const sampleRows = new Array(5).fill(undefined);
  const initObj = {};
  for(let i=0; i<sampleRows.length; i++){
    initObj[i] = false
  }
  const [checked, setChecked] = React.useState(initObj);
 
  

  return (
    <div>
      <center>
        <DataTable>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell hasFormControl>
                  <Checkbox />
                </DataTableHeadCell>
                <DataTableHeadCell>Label</DataTableHeadCell>
                <DataTableHeadCell>Header</DataTableHeadCell>
                <DataTableHeadCell>Header</DataTableHeadCell>
                <DataTableHeadCell>Toggle</DataTableHeadCell>
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
            
              {sampleRows.map((v, i) => (
                <DataTableRow key={i} selected={checked[i]}>
                  <DataTableCell hasFormControl>
                    <Checkbox
                      checked={checked[i]}
                      onChange={(evt) => setChecked({
                          ...checked,
                          [i]: evt.currentTarget.checked
                      })}
                    />
                  </DataTableCell>
                  <DataTableCell>Label</DataTableCell>
                  <DataTableCell>
                    <Select
                      placeholder="--Select--"
                      options={["Cookies", "Pizza", "Icecream"]}
                    />
                  </DataTableCell>
                  <DataTableCell>R{i} C3</DataTableCell>
                  <DataTableCell>
                    <Switch />
                  </DataTableCell>
                </DataTableRow>
              ))}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </center>
    </div>
  );
};

export default About;


