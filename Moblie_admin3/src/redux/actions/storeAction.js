import { store, shop } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fetchStores = () => async (dispatch) => {
  const response = await store.get("/store");
  dispatch({
    type: ActionTypes.FETCH_STORES,
    payload: response,
  });
  console.log("RESS_STORE >>> ", response.data);
};

export const fetchStore = (id) => async (dispatch) => {
  const response = await store.get(`/store/${id}`);
  dispatch({ type: ActionTypes.SELECTED_STORE, payload: response.data });
};

export const setStores = async (stores) => {
  const body = {};
  await store.post(`/edit-store`, body);
  return {
    type: ActionTypes.SET_STORES,
    payload: stores,
  };
};

export const selectedStore = (store) => {
  return {
    type: ActionTypes.SELECTED_STORE,
    payload: store,
  };
};

export const removeSelectedStore = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_STORE,
  };
};
