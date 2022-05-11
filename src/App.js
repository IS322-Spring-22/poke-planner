import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Detail from "./pages/Detail";
import Team from "./pages/Team";
import ErrorPage from "./pages/ErrorPage";
import AddPokemon from "./components/AddPokemon";
import Loading from "./components/Loading";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Poke Planner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link ${(currentPage === "Home"? "active": "")}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${(currentPage === "Pokedex"? "active": "")}`} href="/pokedex">Pokedex</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${(currentPage === "Detail"? "active": "")}`} href="/detail">Detail</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${(currentPage === "Teams"? "active": "")}`} href="/teams">Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path='/' element={<Home setCurrentPage={setCurrentPage}/>}/>
          <Route path='/Pokedex' element={<Pokedex setCurrentPage={setCurrentPage}/>}/>
          <Route path='/detail' element={<Detail setCurrentPage={setCurrentPage}/>}/>
          <Route path='/teams' element={<Team setCurrentPage={setCurrentPage}/>}/>
          <Route path='/addPokemon' element={<AddPokemon/>}/>
          <Route path='/editPokemon' element={<AddPokemon/>}/>
          <Route path='/loading' element={<Loading/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
