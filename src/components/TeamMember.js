import React from "react";
import { Link } from "react-router-dom";
import DefaultSprite from "../images/poke-ball.png";
import MoveList from "./MoveList";
import { getType } from "../services/moveTypes";
import { capitalize } from "../services/api";
import {useDispatch} from "react-redux";

const Type = (type, i) => {
    return <img src={getType(type.typeName)} alt={capitalize(type.typeName)} key={type.typeName} className="col-4" style={{imageRendering: "pixelated", paddingRight: 0}}/>
}

const TeamMember = ({name, sprite, types, moves, removePokemon, editPokemon}) => {
    const typeList = types.map( (typeObj, i) => <Type typeName={typeObj.type.name} key={i} /> )
    const dispatch = useDispatch();
    return (
        <div className="card teamMemberCard">
            <img className="card-img-top" src={sprite || DefaultSprite} alt="Pokemon Sprite" style={{imageRendering: "pixelated"}}/>
            <div className="card-body">
                <h5 className="card-title"> {name} </h5>
                <span className="types row">
					{typeList}
				</span>
                <div className="card-text mt-2">
                    <MoveList moves={moves} />
                </div>

                <div className="buttons mt-1 mx-auto row justify-content-around">
                    <Link to="/editPokemon" className="btn btn-info btn-block teamMemberButton" onClick={() => {editPokemon()(dispatch)}}> Edit </Link>
                    <a className="btn btn-danger btn-block teamMemberButton" onClick={() => {removePokemon()(dispatch)}}> Remove </a>
                </div>
            </div>
        </div>
    )
};

export default TeamMember;
