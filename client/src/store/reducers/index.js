import { combineReducers } from "redux";
import characterReducers from "./character";
import inventoryReducers from "./inventory";

export default combineReducers({
  characterReducers,
  inventoryReducers,
});
