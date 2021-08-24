import { combineReducers } from "redux";
import fibonacciReducer from "./fibonacciReducer";
import akelabReducer from "./akelabReducer";
import peliculasReducer from "./peliculasReducer";

const reducer = combineReducers({
  fibonacciReducer,
  akelabReducer,
  peliculasReducer,
});

export default reducer;
