import { store, shop } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fetchUsers = () => async (dispatch) => {
  const response = await store.get("/users");
  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: response,
  });
  console.log("RESS_USER >>> ", response.data);
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await store.get(`/users/${id}`);
  dispatch({ type: ActionTypes.SELECTED_USER, payload: response.data });
};

export const setUsers = async (users) => {
  const body = {};
  await store.post(`/new-user`, body);
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};

export const removeSelectedUser = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_USER,
  };
};
