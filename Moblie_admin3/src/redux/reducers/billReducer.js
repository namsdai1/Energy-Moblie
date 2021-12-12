import { ActionTypes } from "../contants/action-types";

const initialState = {
  bills: {
    data: [],
  },
  bill1: {
    data: [],
  },
  bill2: {
    data: [],
  },
};
export const billReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BILLS:
      return { ...state, bills: payload };
    case ActionTypes.FETCH_BILLS:
      return { ...state, bills: payload };
    case ActionTypes.FETCH_BILLS1:
      return { ...state, bill1: payload };
    case ActionTypes.FETCH_BILLS2:
      return { ...state, bill2: payload };
    default:
      return state;
  }
};

export const selectedBillReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_BILL:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_BILL:
      return {};
    default:
      return state;
  }
};
