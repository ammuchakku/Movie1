import {
    Fab,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";
  import React, { useEffect, useState } from "react";
  import EditIcon from "@mui/icons-material/Edit";
  import axios from "axios";
  import Edituser from "./Edituser";
  
  const Home = () => {
    var [movie, setmovie] = useState([]);
    var [updatedMovies, setupdatedMovies] = useState(false);
    var [editMovies, seteditMovies] = useState("");
    var editedMovies;
  
    useEffect(() => {
      fetchMovie();
    }, []);
  
    const fetchMovie = () => {
      axios.get("/api/read").then((response) => {
        console.log(response.data);
        setmovie((movie = response.data));
      });
    };
  
    const deleteMovie = (id) => {
      const data = { _id: id };
      axios.post("/api/delete", data).then((response) => {
        console.log(response.data);
        alert("Deleted !!");
        fetchMovie();
      });
    };
  
    const updateMovie = (value) => {
      console.log(value);
      setupdatedMovies(true);
      seteditMovies(value);
      console.log(updatedMovies);
    };
  
    if (updatedMovies) {
      editedMovies = <Edituser value={editMovies} />;
    } else {
      editedMovies = (
        <div id="home">
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
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movie.map((value, index) => {
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
                    <Fab
                      onClick={() => updateMovie(value)}
                      color="inherit"
                      aria-label="edit"
                      size="small"
                    >
                      <EditIcon />
                    </Fab>
                    <IconButton
                      onClick={() => {
                        deleteMovie(value._id);
                      }}
                      color="inherit"
                      aria-label="delete"
                      size="large"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      );
    }
    return editedMovies;
  };
  
  export default Home;