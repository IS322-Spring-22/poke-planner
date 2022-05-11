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
        if (numPokemon >= 6) {
            alert("You can't have more than 6 pokemon!");
            return;
        } else if (id === 0) {
            alert("You must select a pokemon!");
            return;
        }
        navigate("/loading");
        addPokemonToTeam(id)(dispatch).then(() => {navigate("/addPokemon");});
    }

    function handleChange(e) {
        setValue(e.value);
        setID(e.id);
    }

    const customStlye = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px solid lightgray',
            color: state.isSelected ? '#fff' : '#212121',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Select
                id="select"
                placeholder={"Choose Your Pok\u00E9mon!"}
                options={Options}
                onChange={handleChange}
                styles={customStlye}
            />
            <button type="submit" className="add btn btn-primary btn-block">
                {"Add Pok\u00E9mon!"}
            </button>
        </form>
    );
}

export default SelectPokemon;
