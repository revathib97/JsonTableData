import React,{useEffect, useState} from "react";
import { Table,TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

function TableData (){
  const [tableData,setTable]=useState([]);
  
      useEffect(()=>{
    fetchTableData(); 
  })
  const fetchTableData=()=>{
    fetch('http://universities.hipolabs.com/search?country=United+States')
    .then((res)=>res.json())
    .then((response)=>{
      setTable(response);
    })

     
  }
    return(
    <><Table>
        <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Country Code</TableCell>
            <TableCell>Domains</TableCell>
            <TableCell>Web_pages</TableCell>  
            <TableCell>state_province</TableCell>
                
            </TableRow>
        </TableHead>
        
        <TableBody>
        {tableData.map((data, index)=>{
                    return(
            <TableRow key={index}>
        
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.alpha_two_code}</TableCell>
                <TableCell>{data.domains}</TableCell>
                <TableCell>{data.web_pages}</TableCell>
                <TableCell>{data.state_province}</TableCell>
               
            </TableRow>
               )
            })}
        </TableBody>
    </Table>  
        </>
    )
}
export default TableData;