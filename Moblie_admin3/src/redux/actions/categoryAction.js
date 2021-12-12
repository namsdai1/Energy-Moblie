import { store, shop } from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fetchCategories = () => async (dispatch) => {
  const response = await store.get("/category/PHONE");
  dispatch({
    type: ActionTypes.FETCH_CATEGORIES,
    payload: response.data,
  });
  console.log("RESS_CATEGORY >>> ", response.data);
};

export const fetchCategory = (id) => async (dispatch) => {
  const response = await store.get(`/categories/id/${id}`);
  dispatch({ type: ActionTypes.SELECTED_CATEGORY, payload: response.data });
};

export const setCategories = async (categories) => {
  const body = {};
  await store.post(`/new-category`, body);
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

export const selectedCategory = (category) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: category,
  };
};

export const removeSelectedCategory = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_CATEGORY,
  };
};
