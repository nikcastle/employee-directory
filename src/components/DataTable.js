import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";


const DataTable = (props) => {
  

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {props.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }} 
                  onClick={() => {
                    // props.handleSort(name.toLowerCase());
                    props.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataBody developerState={props.developerState}/>
      </table>
    </div>
  );
}

export default DataTable;