import { ActionTypes } from "../contants/action-types";

const initialState = {
  stores: {
    data: [],
  },
};
export const storeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STORES:
      return { ...state, stores: payload };
    case ActionTypes.FETCH_STORES:
      return { ...state, stores: payload };
    default:
      return state;
  }
};

export const selectedStoreReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_STORE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_STORE:
      return {};
    default:
      return state;
  }
};
