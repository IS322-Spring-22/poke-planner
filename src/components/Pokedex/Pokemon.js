import React, { useState, useEffect} from 'react';
import axios from "axios";
import Badge from "./Badge";

function Pokemon({ name, key, loading }) {
  const [ pokemonImg, setPokemonImg ] = useState();
  const [ pokemonTypes, setPokemonTypes ] = useState([]);
  const [ pokemonID, setPokemonID ] = useState();

  useEffect( () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res =>{
      setPokemonImg(res.data.sprites.front_default)
      setPokemonTypes(res.data.types)
      setPokemonID(res.data.id)
    })
  }, [])

  return (
    <div className="col" key={key}>
      <div className="card">
        <div className="row">
          <div className="col">
            <img className='w-100' src={pokemonImg} alt={name}/>
          </div>

          <div className="col d-flex flex-column justify-content-center">
            <h5 className="card-title text-center text-capitalize">{name}</h5>
            <h5 className="card-title text-center text-capitalize"># {pokemonID}</h5>
            <div className="d-flex justify-content-around">
              {
                pokemonTypes.map(type => {
                  return <Badge name={type.type.name}/>
                })
              }
            </div>
          </div>



        </div>



      </div>
    </div>
  );
}

export default Pokemon;
