import React from "react";
import TeamMember from "./TeamMember";
import {capitalize} from "../services/api";

const TeamMemberList = ({ team, removePokemon, editPokemon }) => {
    const teamList = team.map((member,i) => (
        <TeamMember
            name={capitalize(member.name)}
            sprite={member.sprites.front_default}
            types={member.types}
            moves={member.moveList}
            removePokemon={removePokemon.bind(this, member)}
            editPokemon={editPokemon.bind(this, member)}
            key={i}
        />
    ));
    return (
        <div className="row">
            {teamList}
        </div>
    );
}

export default TeamMemberList;
