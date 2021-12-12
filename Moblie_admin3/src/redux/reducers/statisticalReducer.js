import { ActionTypes } from "../contants/action-types";

const initialState = {
  statistical: {
    data: [],
  },
};
export const statisticalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case ActionTypes.SET_CATEGORIES:
    //   return { ...state, categories: payload };
    case ActionTypes.FETCH_STATISTICAL:
      return { ...state, statistical: payload };
    default:
      return state;
  }
};
