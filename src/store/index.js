import { combineReducers } from "redux";
import fibonacciReducer from "./fibonacciReducer";
import akelabReducer from "./akelabReducer";
import peliculasReducer from "./peliculasReducer";
import dropdownGenres from "./dropdownGenres";
import fechaReducer from "./fechaReducer";

const reducer = combineReducers({
  fibonacciReducer,
  akelabReducer,
  peliculasReducer,
  dropdownGenres,
  fechaReducer,
});

export default reducer;
