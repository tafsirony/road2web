import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfidureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
