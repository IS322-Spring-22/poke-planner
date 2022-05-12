import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function Detail() {
    const { pokemonID } = useParams();
    const [ pokemonName, setPokemonName ] = useState();
    const [ pokemonSprite, setPokemonSprite ] = useState();
    const [ pokemonAnimation, setPokemonAnimation ] = useState();
    const [ pokemonStatHP, setPokemonStatHP ] = useState();
    const [ pokemonStatAtk, setPokemonStatAtk ] = useState();
    const [ pokemonStatDef, setPokemonStatDef ] = useState();
    const [ pokemonStatSpAtk, setPokemonStatSpAtk ] = useState();
    const [ pokemonStatSpDef, setPokemonStatSpDef ] = useState();
    const [ pokemonStatSpeed, setPokemonStatSpeed ] = useState();

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then(res =>{
            setPokemonName(capitalizeName(res.data.name));
            setPokemonSprite(res.data.sprites.front_default);
            setPokemonAnimation(res.data.sprites.versions["generation-v"]["black-white"].animated.front_default);
            setPokemonStatHP(res.data.stats[0].base_stat);
            setPokemonStatAtk(res.data.stats[1].base_stat);
            setPokemonStatDef(res.data.stats[2].base_stat);
            setPokemonStatSpAtk(res.data.stats[3].base_stat);
            setPokemonStatSpDef(res.data.stats[4].base_stat);
            setPokemonStatSpeed(res.data.stats[5].base_stat);
        })
    }, []);

    function capitalizeName(myname){
        const arr = myname.split("-");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
        }
        return arr.join(" ");
    }

    return (
        <div className="container-fluid card text-center w-50">
            <div className="card-header">
                <h1 className="text-center">{pokemonName}</h1>
            </div>

            <div className="card-body">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#sprite">Stats</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#animation">Animation</a>
                    </li>
                </ul>

                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active show" id="sprite">
                        <img className="w-50" width="" src={pokemonSprite} alt={pokemonName}/>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-bottom">HP:&emsp;{pokemonStatHP}</li>
                            <li className="list-group-item border-bottom">Atk:&emsp;{pokemonStatAtk}</li>
                            <li className="list-group-item border-bottom">Def:&emsp;{pokemonStatDef}</li>
                            <li className="list-group-item border-bottom">Sp. Atk:&emsp;{pokemonStatSpAtk}</li>
                            <li className="list-group-item border-bottom">Sp. Def:&emsp;{pokemonStatSpDef}</li>
                            <li className="list-group-item">Speed:&emsp;{pokemonStatSpeed}</li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="animation">
                        <img className="w-25 m-5" width="" src={pokemonAnimation} alt={pokemonName}/>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Detail;
