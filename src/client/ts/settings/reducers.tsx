import { combineReducers } from "redux";
import { ActionTypes } from "./actions";
export const initialState = {
  counter: { value: 0 },
};
const counter = (counter = initialState.counter, action: { type:string, data: number }) => {
  if (action.type === ActionTypes.SET_COUNTER_ACTION) {
    counter.value = action.data;
  }
  return { ...counter };
};

export const reducer = combineReducers({
  counter,
});
