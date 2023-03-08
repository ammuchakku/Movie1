import { Typography, TextField, Button, Table, TableHead, TableCell, TableRow, TableBody } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import useForm from "../comp/UseForm";
import axios from "axios";

const Search = () => {
    
  var [search,setSearch] = useForm({"movieName":""});
  var [result,setResult] = useState ([]);


  const searchMovie =() =>{
   axios.post("/api/search",search)
   .then((response)=>{
    console.log(response.data);
    setResult(result = response.data);
   });
  }

  return (
    <div className="search">
      <Typography variant="h5">Search Movie</Typography><br></br>
      <TextField name="movieName" value={search.movieName} onChange={setSearch} variant="outlined" size="large" label='Search Movie'></TextField>

      <Button color="success" onClick={searchMovie}><SearchIcon/></Button>

      <Table>
          <TableHead>
            <TableRow>
              <TableCell>Movie Name</TableCell>
              <TableCell>Actor</TableCell>
              <TableCell>Actress</TableCell>
              <TableCell>Direction</TableCell>
              <TableCell>Released Date</TableCell>
              <TableCell>Camera</TableCell>
              <TableCell>Producer</TableCell>
              <TableCell>Language</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            result.map((value, index) => {
              return (

                  <TableRow key={index}>
                  <TableCell>{value.movieName}</TableCell>
                  <TableCell>{value.movieActor}</TableCell>
                  <TableCell>{value.movieActress}</TableCell>
                  <TableCell>{value.movieDirector}</TableCell>
                  <TableCell>{value.movieYear}</TableCell>
                  <TableCell>{value.movieCamera}</TableCell>
                  <TableCell>{value.movieProducer}</TableCell>
                  <TableCell>{value.movieLanguage}</TableCell>
                  
                    
                </TableRow>
              ) 
            })}
            </TableBody>
        </Table>
    </div>
  );
};

export default Search;