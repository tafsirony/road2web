// this removeded and will be responsible in Actioncreators
// import { DISHES } from "../shared/dishes";

import * as ActionTypes from "./ActionTypes"; // this added as part of removing upper import

export const Dishes = (
  //it was "state = DISHES" when the first import was installed
  state = {
    isLoading: true,
    errMess: null,
    dishes: [],
  },
  action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };
    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
      };
    default:
      return state;
  }
};
