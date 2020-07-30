import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Reducer, initialState } from "./reducer";

// improting individual reducer & combining here
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  // const store = createStore(Reducer, initialState); //this was needed for joint reducer file
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
