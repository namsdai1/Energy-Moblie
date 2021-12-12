import { store, shop } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fetchBills = () => async (dispatch) => {
  const response = await store.get("/bill");
  dispatch({
    type: ActionTypes.FETCH_BILLS,
    payload: response.data,
  });
  console.log("RESS_BILL >>> ", response.data);
};

export const fetchBills1 = () => async (dispatch) => {
  const response = await store.get("/bill/bill/1");
  dispatch({
    type: ActionTypes.FETCH_BILLS1,
    payload: response.data,
  });
  console.log("RESS_BILL1 >>> ", response.data);
};

export const fetchBills2 = () => async (dispatch) => {
  const response = await store.get("/bill/bill/2");
  dispatch({
    type: ActionTypes.FETCH_BILLS2,
    payload: response.data,
  });
  console.log("RESS_BILL2 >>> ", response.data);
};

export const fetchBill = (id) => async (dispatch) => {
  const response = await store.get(`/bill/billdetail/${id}`);
  dispatch({ type: ActionTypes.SELECTED_BILL, payload: response.data });
};

export const setBills = async (bills) => {
  const body = {};
  await store.post(`/new-bill`, body);
  return {
    type: ActionTypes.SET_BILLS,
    payload: bills,
  };
};

export const selectedBill = (bill) => {
  return {
    type: ActionTypes.SELECTED_BILL,
    payload: bill,
  };
};

export const removeSelectedBill = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BILL,
  };
};
