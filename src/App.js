import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Detail from "./pages/Detail";
import Team from "./pages/Team";
import ErrorPage from "./pages/ErrorPage";
import AddPokemon from "./components/AddPokemon";
import Loading from "./components/Loading";

function App() {

  return (

      <Router>
        <Navbar/>
        <div className="container-fluid">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Pokedex' element={<Pokedex/>}/>
            <Route path='/detail/:pokemonID' element={<Detail/>}/>
            <Route path='/teams' element={<Team/>}/>
            <Route path='/addPokemon' element={<AddPokemon/>}/>
            <Route path='/editPokemon' element={<AddPokemon/>}/>
            <Route path='/loading' element={<Loading/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </div>
      </Router>

  );
}

export default App;
