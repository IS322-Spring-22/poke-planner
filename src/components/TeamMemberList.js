import React from "react";
import TeamMember from "./TeamMember";

// change member.moves to member.moveList once api connected

const TeamMemberList = ({ team, removePokemon, editPokemon }) => {
    const teamList = team.map((member,i) => (
        <TeamMember
            name={member.name}
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
