import { Route, Routes } from "react-router-dom";
import './App.css';
import Search from "./components/Search";
import AddMovie from "./components/AddMovie";
import Header from "./components/Header";
import Home from "./components/Home";
import Edituser from "./components/Edituser";


/*import Header from './compo/Header';
import React, { Component }  from 'react';*/


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/AddMovie" element={<AddMovie />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/Edituser/:id" element={<Edituser />}></Route>
        </Routes>
      </div>
  );
}

export default App;
