import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useForm from "../compo/useForm";

const AddMovie = () => {
    var [movies, setmovies] = useForm({
        movieName: "",
        movieActor: "",
        movieActress: "",
        movieDirector: "",
        movieYear: "",
        movieCamera: "",
        movieProducer: "",
        movieLanguage: "",
    });

    var [displayMovie, setdisplayMovie] = useState({});
    useEffect(() => {}, []);

    const addMovies = () => {
        axios.post("/api/create", movies).then((response) => {
            console.log(response.data);
            setdisplayMovie((displayMovie = response.data));
            alert("Data Added");
            window.location.reload();
        });
    };

    return (
        <div>
      <div className="add">
        <TextField
          name="movieName"
          value={movies.movieName}
          onChange={setmovies}
          variant="outlined"
          label="Movie Name"
        ></TextField>
        <TextField
          name="movieActor"
          value={movies.movieActor}
          onChange={setmovies}
          variant="outlined"
          label="Actor"
        ></TextField>
        <TextField
          name="movieActress"
          value={movies.movieActress}
          onChange={setmovies}
          variant="outlined"
          label="Actress"
        ></TextField>
        <TextField
          name="movieDirector"
          value={movies.movieDirector}
          onChange={setmovies}
          variant="outlined"
          label="Director"
        ></TextField>

        <TextField
          name="movieYear"
          value={movies.movieYear}
          onChange={setmovies}
          type="date"
          variant="outlined"
        ></TextField>
        <TextField
          name="movieCamera"
          value={movies.movieCamera}
          onChange={setmovies}
          variant="outlined"
          label="Camera"
        ></TextField>
        <TextField
          name="movieProducer"
          value={movies.movieProducer}
          onChange={setmovies}
          variant="outlined"
          label="Producer"
        ></TextField>
        <TextField
          name="movieLanguage"
          value={movies.movieLanguage}
          onChange={setmovies}
          variant="outlined"
          label="Language"
        ></TextField>
      </div>
      <div className="btn">
        <Button
          onClick={addMovies}
          size="large"
          variant="contained"
          color="success"
        >
          ADD MOVIE
        </Button>
      </div>
    </div>
  );
};

export default AddMovie;