import React from "react";
import TeamMemberList from "../components/TeamMemberList";
import SelectPokemon from "../components/SelectPokemon";
import {editPokemonInTeam, removePokemonFromTeam} from "../store/actions/pokemon";
import {withRouter} from "react-router-dom";
import {connect, useSelector} from "react-redux";

function Team({ setCurrentPage}) {
  setCurrentPage("Teams");
    const team = useSelector(state => state.teams.team);
    return (
        <div>
            <h1 className="d-flex justify-content-center"> Select {"Pok\u00E9mon"} for your team! </h1>
            <TeamMemberList team={team} removePokemon={removePokemonFromTeam} editPokemon={editPokemonInTeam} />
            <SelectPokemon />

        </div>
    )
}

export default Team;
