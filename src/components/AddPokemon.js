import React from "react";
import DefaultSprite from "../images/poke-ball.png";
import {connect, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import MoveTableRow from "./MoveTableRow";
import MoveList from "../components/MoveList";
import { capitalize } from "../services/api";

const AddPokemon = () => {
    const pokemon = useSelector((state) => {
        return state.teams.lastPokemon;
    });
    const moveList = useSelector((state) => state.teams.lastPokemon.moveList);
    return (
        <div className="container mt-2">
            <h1 className="d-flex justify-content-center pokeName"> Moveset: {capitalize(pokemon.name)} </h1>
            <h3 className="d-flex justify-content-center text-center"> Click on moves to select them. Click again to remove them. </h3>
            <div className="d-md-flex justify-content-center">
                <div id="pokeInfo">
                    <img className="rounded addTeamMemberSprite" src={pokemon.sprites.front_default || DefaultSprite} alt="Pokemon Sprite" style={{
                        width: "256 px",
                        imageRendering: "pixelated"
                    }}/>
                    <MoveList moves={moveList}/>
                    <div className="row justify-content-center mt-2">
                        <Link to="/teams" className="btn btn-primary btn-block toTeam col-8"> Your Team </Link>
                    </div>
                </div>
                <div className="moveTable">
                    <table className="table table-hover moveList">
                        <MoveTableHeader />
                        <MoveTableRow pokemon={pokemon} moves={pokemon.moves} />
                    </table>
                </div>
            </div>
            <div className="row justify-content-center">
                <Link to="/teams" className="toTeamButton btn btn-primary btn-block col-4"> Your Team </Link>
            </div>

        </div>
    )
}

const MoveTableHeader = () => {
    return (
        <thead>
        <tr>
            <th scope="col"> Name </th>
            <th scope="col"> Type </th>
            <th scope="col"> Category </th>
            <th scope="col"> Power </th>
            <th scope="col"> Accuracy </th>
            <th scope="col"> PP </th>
            <th scope="col"> Description </th>
        </tr>
        </thead>
    )
}

export default AddPokemon;
