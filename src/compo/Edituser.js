import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";


const Edituser = (props) => {
    console.log(props);
  
    var [newmovies, setnewMovies] = useState({
      movieName: props.value.movieName,
      movieActor: props.value.movieActor,
      movieActress: props.value.movieActress,
      movieDirector: props.value.movieDirector,
      movieYear: props.value.movieYear,
      movieCamera: props.value.movieCamera,
      movieProducer: props.value.movieProducer,
      movieLanguage: props.value.movieLanguage,
    });
  
    const inputHandler = (event) => {
      const { name, value } = event.target;
      setnewMovies((previousState) => ({
        ...previousState,
        [name]: value,
      }));
    };
  
    const readValues = () => {
      var newData = { ...newmovies, _id: props.value._id };
      axios.post("/api/update", newData).then((response) => {
        console.log("new Data" + response.data);
        alert("Success");
        window.location.reload();
      });
    };
  
    return (
      <div>
        <div className="add">
          <TextField
            name="movieName"
            onChange={inputHandler}
            value={newmovies.movieName}
            variant="outlined"
            label="Movie Name"
          ></TextField>
          <TextField
            name="movieActor"
            value={newmovies.movieActor}
            variant="outlined"
            onChange={inputHandler}
            label="Actor"
          ></TextField>
          <TextField
            name="movieActress"
            value={newmovies.movieActress}
            variant="outlined"
            onChange={inputHandler}
            label="Actress"
          ></TextField>
          <TextField
            name="movieDirector"
            value={newmovies.movieDirector}
            variant="outlined"
            onChange={inputHandler}
            label="Director"
          ></TextField>
  
          <TextField
            name="movieYear"
            value={newmovies.movieYear}
            type="date"
            variant="outlined"
            onChange={inputHandler}
          ></TextField>
          <TextField
            name="movieCamera"
            value={newmovies.movieCamera}
            variant="outlined"
            onChange={inputHandler}
            label="Camera"
          ></TextField>
          <TextField
            name="movieProducer"
            value={newmovies.movieProducer}
            variant="outlined"
            onChange={inputHandler}
            label="Producer"
          ></TextField>
          <TextField
            name="movieLanguage"
            value={newmovies.movieLanguage}
            variant="outlined"
            onChange={inputHandler}
            label="Language"
          ></TextField>
  
          <div className="btn1">
            <Button
              onClick={readValues}
              size="large"
              variant="contained"
              color="success"
            >
              UPDATE
            </Button>
          </div>
        </div>
      </div>
    );
  };

  export default Edituser;