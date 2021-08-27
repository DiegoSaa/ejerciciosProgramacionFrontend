import { combineReducers } from "redux";
import fibonacciReducer from "./fibonacciReducer";
import akelabReducer from "./akelabReducer";
import peliculasReducer from "./peliculasReducer";
import dropdownGenres from "./dropdownGenres";

const reducer = combineReducers({
  fibonacciReducer,
  akelabReducer,
  peliculasReducer,
  dropdownGenres,
});

export default reducer;
