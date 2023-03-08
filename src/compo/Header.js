import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="nav">
      <Typography variant="h4">
        SECOND <span>SHOW</span>
      </Typography>

      <ul className="nav-menu">
        <Link style={{ color: "white" }} to="/">
          <HomeIcon />
          Home
        </Link>
        <Link style={{ color: "white" }} to="/AddMovie">
          <AddCircleIcon />
          Add Movie
        </Link>
        <Link style={{ color: "white" }} to="/Search">
          <SearchIcon />
          Search
        </Link>
      </ul>
    </div>
  );
};

export default Header;