import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Surveylist() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys();
  }, [])

  const getSurveys = () => {
    fetch('http://localhost:8080/surveys')
    .then(response => response.json())
    .then(data => setSurveys(data))
    .catch(err => console.error(err))
  }

  const columns = [
    { headerName: 'Survey', field: 'surveyHeader', sortable: true, filter: true}
  ]

  return (
    <div>
      <div className="ag-theme-material" style={{height:'700px', width:'90%', margin:'auto'}}>
        <AgGridReact
          columnDefs={columns}
          rowData={surveys}
          pagination="true"
          paginationPageSize="10"
        >
        </AgGridReact>
      </div>
    </div>
  );
}

export default Surveylist;