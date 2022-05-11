import { combineReducers } from "redux";
import pokemon from "./pokemon";
import errors from "./errors";

const rootReducer = combineReducers({
    pokemon,
    errors
});

export default rootReducer;
