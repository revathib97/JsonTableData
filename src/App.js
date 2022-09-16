import React,{useEffect, useState} from "react";
import { Table,TableBody, TableCell, TableHead, TableRow } from "@mui/material";


function TableData (){
  const [tableData,setTable]=useState([]);
  const [sorting,setSorting]=useState({key:"name",ascending:true})

  useEffect(()=>{
    fetchTableData();
    const jsonData =[...tableData]
    const tableSort=jsonData.sort((a,b)=>{
      return a[sorting.key].localeCompare(b[sorting.key]);
    })
    setTable(
      sorting.ascending ? tableSort : tableSort.reverse()
    );
  },[tableData,sorting])
  
  
  const fetchTableData=()=>{
    fetch('http://universities.hipolabs.com/search?country=United+States')
    .then((res)=>res.json())
    .then((response)=>{
      setTable(response);
    })

     
  }
   

  const sortingOnClickHandler =(key,ascending)=>{
    setSorting({key:key,ascending:ascending});
    console.log('sorting');
    

  }


    return(
    <><Table>
        <TableHead>
            <TableRow>
            <TableCell style={{cursor:'pointer'}} onClick={()=>sortingOnClickHandler("name",!sorting.ascending)}>Name</TableCell>
            <TableCell style={{cursor:'pointer'}} onClick={()=>sortingOnClickHandler("country",!sorting.ascending)}>Country</TableCell>
            <TableCell>Country Code</TableCell>
            <TableCell>Domains</TableCell>
            {/* <TableCell>Web_pages</TableCell>  
            <TableCell>state_province</TableCell> */}
                
            </TableRow>
        </TableHead>
        
        <TableBody>
        {tableData.map((data, index)=>{
                    return(
            <TableRow key={index+1}>
        
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.country}</TableCell>
                <TableCell>{data.alpha_two_code}</TableCell>
                <TableCell>{data.domains}</TableCell>
                {/* <TableCell>{data.web_pages}</TableCell>
                <TableCell>{data.state_province}</TableCell> */}
               
            </TableRow>
               )
            })}
        </TableBody>
    </Table>  
        </>
    )
}
export default TableData;