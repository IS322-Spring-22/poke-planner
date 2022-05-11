import {useState} from "react";
import Select from "react-select";
import Options from "../services/optionList";
import {addPokemonToTeam} from "../store/actions/pokemon";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

const SelectPokemon = () => {
    const [value, setValue] = useState("");
    const [id, setID] = useState(0);
    const numPokemon = useSelector(state => state.teams.numPokemon);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(numPokemon >= 6 || id === 0) {
            return;
        }
        navigate("/loading");
        dispatch(addPokemonToTeam(id)).then(() => {navigate("/addPokemon");});
    }

    function handleChange(e) {
        setValue(e.value);
        setID(e.id);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Select
                id="select"
                placeholder={"Choose Your Pok\u00E9mon!"}
                options={Options}
                onChange={handleChange}
            />
            <button type="submit" className="add btn btn-primary btn-block">
                {"Add Pok\u00E9mon!"}
            </button>
        </form>
    );
}

export default SelectPokemon;
