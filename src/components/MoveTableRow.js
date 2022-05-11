import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import { addMoveToList, removeMoveFromList } from "../store/actions/pokemon";
import { getType, getCategory } from "../services/moveTypes";
import { capitalize } from "../services/api";

const MoveTableRow = ({ pokemon, moves }) => {
    const [moveState, setMoveState] = useState(new Array(moves.length).fill(false));

    const dispatch = useDispatch();


    function setActive(moveState) {
        let updatedMoveState = [...moveState];

        for(let i = 0; i < pokemon.moveList.length; i++) {
            for(let j = 0; j < moves.length; j++) {
                if(pokemon.moveList[i] === moves[j].name) {
                    updatedMoveState[j] = true;
                }
            }
        }

        setMoveState(updatedMoveState);
    }

    //useEffect(() => {setActive(moveState)} , [moves]);


    function handleClick(e) {
        let moveName = e.currentTarget.dataset.value;
        let i = e.currentTarget.dataset.key;

        // adding/removing move from move list
        if(moveState[i]) {
            removeMoveFromList(pokemon, moveName)(dispatch);
        } else {
            if(pokemon.moveList.length >= 4) {
                return;
            }
            addMoveToList(pokemon, moveName)(dispatch);
        }

        // toggle active state

        let newMoveState = [...moveState];
        newMoveState[i] = !newMoveState[i];
        setMoveState(newMoveState);
    }

    function getDescription(text_entries) {
        return text_entries.filter( txt => txt.language.name === "en" );
    }

    const moveList = moves.map( (move, i) => (
        <tr
            className={moveState[i] ? "table-info" : null}
            value={move.name}
            onClick={handleClick}
            key={i}
            data-key={i}
            data-value={move.name}
        >
            <th scope="row"> {capitalize(move.name)} </th>
            <td> <img src={getType(move.type.name)} alt={capitalize(move.type.name)} /> </td>
            <td> <img src={getCategory(move.damage_class.name)} alt={capitalize(move.damage_class.name)} /> </td>
            <td> {move.power} </td>
            <td> {move.accuracy} </td>
            <td> {move.pp} </td>
            <td> {getDescription(move.flavor_text_entries)[0].flavor_text} </td>
        </tr>
    ));
    return (
        <tbody>
        {moveList}
        </tbody>
    )
}

export default connect(null, { addMoveToList, removeMoveFromList })(MoveTableRow);
