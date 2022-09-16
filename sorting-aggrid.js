import React, { useState, useEffect} from 'react';
import { AgGridReact } from 'ag-grid-react'; 

import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

const App = () => {

 
 const [rowData, setRowData] = useState(); 

 
 const [columnDefs, setColumnDefs] = useState([
   {field: 'name', filter: true ,sortable: true},
   {field: 'country', filter: true, sortable: true},
   {field: 'domains'},
   {field: 'web_pages'},
   {field: 'alpha_two_code'}
   
 ]);

 
 useEffect(() => {
  fetch('http://universities.hipolabs.com/search?country=United+States')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
 }, []);

 
 return (
   <div>

     

     
     <div className="ag-theme-alpine" style={{width: 1000, height: 900}}>

       <AgGridReact
           

           rowData={rowData} 

           columnDefs={columnDefs} 
           
           
                  

           
           />
     </div>
   </div>
 );
};

export default App;