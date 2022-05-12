import React, { useState, useEffect } from 'react';
import Pokemon from "../components/Pokedex/Pokemon";
import Pagination from "../components/Pokedex/Pagination";
import Loading from "./Loading";
import axios from "axios";

function Pokedex() {
  const [ pokemon, setPokemon ] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [ nextPageURL, setNextPageURL ] = useState();
  const [ prevPageURL, setPrevPageURL ] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageURL).then(res => {
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);
      setPokemon(res.data.results.map(p => p.name))
    })
    setLoading(false);
  }, [currentPageURL]);

  return (
    <div className="container-fluid" >
      {
        loading ?
          <Loading /> :
          <div>
            <div className={`row row-cols-1 row-cols-md-4 row-cols-xl-5 g-4`}>
              { pokemon.map(p => (
                <Pokemon key={p} name={p} loading={loading} />
              )) }
            </div>
            <Pagination nextPageURL={nextPageURL} prevPageURL={prevPageURL} setCurrentPage={setCurrentPageURL}/>
          </div>
      }
    </div>
  );
}

export default Pokedex;
