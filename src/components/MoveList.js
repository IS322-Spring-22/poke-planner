import React from "react";
import { capitalize } from "../services/api";

const Move = ({moveName}) => (
    <div className="move text-center">{capitalize(moveName)}</div>
);

const MoveList = props => {
    const {moves} = props;
    const moveList = moves.map( (move,i) => (
        <Move
            moveName={move}
            key={i}
        />
    ));
    return (
        <div>
            {moveList}
        </div>
    )
}

export default MoveList;
