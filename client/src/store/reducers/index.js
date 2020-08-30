import { combineReducers } from "redux";
import characters from "./character";
import inventories from "./inventory";

export default combineReducers({
  characters,
  inventories,
});
