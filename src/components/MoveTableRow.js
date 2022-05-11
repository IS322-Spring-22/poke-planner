import React from "react";
import { connect } from "react-redux";
import { addMoveToList, removeMoveFromList } from "../store/actions/pokemon";
import { getType, getCategory } from "../services/moveTypes";
import { capitalize } from "../services/api";

class MoveTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveState: new Array(props.moves.length).fill(false)
        }
        this.handleClick = this.handleClick.bind(this);
        this.setActive = this.setActive.bind(this);
        this.getDescription = this.getDescription.bind(this);
    }

    setActive(moveState) {
        var updatedMoveState = [...moveState];

        for(var i = 0; i < this.props.pokemon.moveList.length; i++) {
            for(var j = 0; j < this.props.moves.length; j++) {
                if(this.props.pokemon.moveList[i] === this.props.moves[j].name) {
                    updatedMoveState[j] = true;
                }
            }
        }

        this.setState({moveState: updatedMoveState});
    }

    handleClick(e) {
        var moveName = e._dispatchInstances.memoizedProps.value;
        var i = e._dispatchInstances.key;

        // adding/removing move from move list
        if(this.state.moveState[i]) {
            this.props.removeMoveFromList(this.props.pokemon, moveName);
        } else {
            if(this.props.pokemon.moveList.length >= 4) {
                return;
            }
            this.props.addMoveToList(this.props.pokemon, moveName);
        }

        // toggle active state

        let moveState = [...this.state.moveState];
        moveState[i] = !moveState[i];
        this.setState({ moveState });
    }

    getDescription(text_entries) {
        return text_entries.filter( txt => txt.language.name === "en" );
    }

    componentWillMount() {
        this.setActive(this.state.moveState);
    }

    render() {
        const { moves } = this.props;
        const moveList = moves.map( (move, i) => (
            <tr
                className={this.state.moveState[i] ? "table-info" : null}
                value={move.name}
                onClick={this.handleClick}
                key={i}
            >
                <th scope="row"> {capitalize(move.name)} </th>
                <td> <img src={getType(move.type.name)} alt={capitalize(move.type.name)} /> </td>
                <td> <img src={getCategory(move.damage_class.name)} alt={capitalize(move.damage_class.name)} /> </td>
                <td> {move.power} </td>
                <td> {move.accuracy} </td>
                <td> {move.pp} </td>
                <td> {this.getDescription(move.flavor_text_entries)[0].flavor_text} </td>
            </tr>
        ));
        return (
            <tbody>
            {moveList}
            </tbody>
        )
    }
}

export default connect(null, { addMoveToList, removeMoveFromList })(MoveTableRow);
