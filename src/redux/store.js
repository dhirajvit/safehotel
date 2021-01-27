import { combineReducers, createStore } from "redux";
import numpadReducer from "./num_pad/reducer";
import lockpadReducer from "./lock_pad/reducer";

export const rootReducer = combineReducers({
  numpad: numpadReducer,
  lockpad: lockpadReducer,
});
const store = createStore(rootReducer);
export default store;
