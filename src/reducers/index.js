import changeNumber from "./update";
import allData from "./data";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,allData
  
});

export default rootReducer


